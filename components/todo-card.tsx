import React, {useEffect, useMemo, useState} from 'react';
import {Pressable, StyleSheet, View} from "react-native";
import Spaces from "@/constants/Spaces";
import Font from "@/components/UI/font";
import Checkbox from "@/components/UI/checkbox";
import Icon from "@/components/UI/icon";
import Colors from "@/constants/Colors";
import Skeleton from "@/components/UI/skeleton";
import {useRouter} from "expo-router";
import Groups from "@/constants/Groups";
import {AppTodoType} from "@/constants/Types";

const TodoCard = (props: {
    item: AppTodoType
    onToggle: (id: string, value: boolean) => void
    onRemove: (id: string) => void
}) => {

    const TWO_STRINGS_HEIGHT = 48
    const PADDING = Spaces.sm
    const CARD_HEIGHT = TWO_STRINGS_HEIGHT + PADDING*2
    const CARD_MAX_WIDTH = 380
    const MAX_CHARS = 50
    const BADGE = 15

    const skeletonOffset = 6
    const skeletonHeight = (TWO_STRINGS_HEIGHT - skeletonOffset)/2

    const readyDelay = 700

    const router = useRouter()

    const [btnsWidth, setBtnsWidth] = useState(0)
    const [cardWidth, setCardWidth] = useState(0)

    const textWidth = useMemo(() => {
        return cardWidth - btnsWidth - PADDING * 2
    }, [cardWidth, btnsWidth])

    const [textHeight, setTextHeight] = useState(0)

    const renderedText = useMemo(() => props.item.short, [textHeight])

    const [ready, setReady] = useState(false)

    const color = useMemo(() => {
        return Groups.find(g => g.id === props.item.group_id)?.color as string
    }, [props.item])

    const styles = StyleSheet.create({
        wrapper: {
            height: CARD_HEIGHT,
            width: "100%",
            maxWidth: CARD_MAX_WIDTH,
            position: "relative",
            overflow: "hidden",

            backgroundColor: Colors.white,
            borderRadius: PADDING,
        },
        full: {
            width: "100%",
            height: "100%",
            padding: PADDING,
        },
        card: {
            flexDirection: "row",
            alignItems: "center",
        },
        text: {
            height: "100%",
            width: textWidth,
        },
        badge: {
            width: BADGE*2,
            height: BADGE*2,
            borderRadius: BADGE*2,
            position: "absolute",
            left: -BADGE,
            top: -BADGE,
            backgroundColor: ready? color : Colors.transparent
        },
        btnsRow: {
            gap: Spaces.md,
            paddingRight: Spaces.xs,
            flexDirection: "row",
            alignItems: "center"
        },
        skeleton: {
            flexDirection: "row",
            position: "absolute",
            backgroundColor: Colors.white,
        }
    })

    return (
        <View style={styles.wrapper} onLayout={e => {
            setCardWidth(e.nativeEvent.layout.width)
        }}>
            <Pressable
                onLayout={() => {
                    setReady(false)
                    setTimeout(() => setReady(true), readyDelay)
                }}
                // @ts-ignore
                onPress={() => router.push(String(props.item.id))}
                style={[styles.card, styles.full]}
            >
                <View style={styles.badge}/>
                <View style={styles.text} onLayout={e => {
                    setTextHeight(e.nativeEvent.layout.height)
                }}>
                    <Font crossed={props.item.checked}>{ renderedText }</Font>
                </View>
                <View style={styles.btnsRow} onLayout={e => {
                    setBtnsWidth(e.nativeEvent.layout.width)
                }}>
                    <Icon name={"trash"} color={"red"} onPress={() => props.onRemove(props.item.id)}/>
                    <Checkbox
                        active={props.item.checked}
                        onChange={val => props.onToggle(props.item.id, val)}
                        color={color}
                    />
                </View>
            </Pressable>
            {!ready&& (
                <View style={[styles.full, styles.skeleton]}>
                    <View style={{ flexGrow: 1, gap: skeletonOffset }}>
                        <Skeleton height={skeletonHeight}/>
                        <Skeleton height={skeletonHeight} order={1}/>
                    </View>
                    <View style={styles.btnsRow}>
                        <Skeleton width={24} height={24} order={2} round/>
                    </View>
                </View>
            )}
        </View>
    );
};

export default TodoCard;