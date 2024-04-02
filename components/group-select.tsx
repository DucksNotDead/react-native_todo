import React, {useEffect, useMemo, useState} from 'react';
import {AppGroupIdType, AppGroupType} from "@/constants/Types";
import Groups from "@/constants/Groups";
import {Pressable, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import Font from "@/components/UI/font";
import Spaces from "@/constants/Spaces";
import Colors from "@/constants/Colors";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import Icon from "@/components/UI/icon";
import {useClickOutside} from "react-native-click-outside";

const GroupSelect = (props: {
    active: AppGroupIdType
    onChange?: (val: AppGroupIdType) => void
}) => {
    const WIDTH = 180
    const COLOR_SIZE = 20
    const duration = 200

    const groups = Groups

    const activeGroup = useMemo(() => {
        return groups.find(g => g.id === props.active)
    }, [props.active])

    const availableGroups = useMemo(() => {
        return groups.filter(g => g.id !== props.active)
    }, [props.active]);

    const [itemHeight, setItemHeight] = useState(0)

    const [listOpen, setListOpen] = useState(false)

    const transitionVal = useSharedValue(0)

    useEffect(() => {
        transitionVal.value = listOpen? withTiming(1, { duration }) : withTiming(0, { duration })
    }, [listOpen]);

    const toggleList = () => {
        props.onChange&& setListOpen(prev => !prev)
    }

    const wrapperRef = useClickOutside(() => setListOpen(false))

    const animatedListStyle = useAnimatedStyle(() => ({
        opacity: transitionVal.value,
        transform: [{ translateY: (transitionVal.value-1) * -3 }]
    }))

    const styles = StyleSheet.create({
        wrapper: {
          position: "relative",
          width: WIDTH
        },
        item: {
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: Spaces.sm,
            paddingHorizontal: Spaces.md,
            gap: Spaces.sm
        },
        activeBlock: {
            position: "relative",
            backgroundColor: Colors.white,
            borderRadius: Spaces.md
        },
        color: {
            height: COLOR_SIZE,
            width: COLOR_SIZE,
            borderRadius: COLOR_SIZE,
        },
        list: {
            display: listOpen? "flex" : "none",
            backgroundColor: Colors.white,
            borderRadius: Spaces.md,
            position: "absolute",
            top: itemHeight + 10,
            width: "100%",
            shadowColor: Colors.black,
            shadowRadius: 5,
            shadowOpacity: .3,
            shadowOffset: {width: 0, height: 0}
        },
        arrow: {
            position: "absolute",
            right: 10,
            height: "100%",
            justifyContent: "center"
        }
    })

    const Group = (groupProps: {
        item: AppGroupType,
        onLayout?: (height: number) => void
    }) =>
        <TouchableOpacity disabled={groupProps.item.id === props.active} onPress={() => {
            toggleList()
            props.onChange&& props.onChange(groupProps.item.id)
        }} onLayout={e => {
            groupProps.onLayout&& groupProps.onLayout(e.nativeEvent.layout.height)
        }} style={styles.item}>
            <View style={[styles.color, {
                backgroundColor: groupProps.item.color
            }]}/>
            <Font size={18}>{ groupProps.item.name }</Font>
        </TouchableOpacity>

    return (
        <View style={styles.wrapper} ref={wrapperRef}>
            <Pressable disabled={!props.onChange} onPress={toggleList} style={styles.activeBlock}>
                <Group
                    item={activeGroup as AppGroupType}
                    onLayout={setItemHeight}
                />
                {props.onChange&& <View style={[styles.arrow, {
                    transform: `rotate(${listOpen ? 180 : 0}deg)`
                }]}>
                    <Icon name={"chevron-down"} color={"grey"}/>
                </View>}
            </Pressable>
            <Animated.View style={[animatedListStyle, styles.list]}>
                {availableGroups.map(group => (
                    <Group key={group.id} item={group} />
                ))}
            </Animated.View>
        </View>
    );
};

export default GroupSelect;