import React, {useEffect} from 'react';
import Animated, {useAnimatedStyle, useSharedValue, withRepeat, withTiming} from 'react-native-reanimated';
import Colors from "@/constants/Colors";
import Spaces from "@/constants/Spaces";

const Skeleton = (props: {
    height: number
    width?: number
    order?: number,
    round?: boolean
}) => {
    const max = 1
    const min = .3
    const opacity = useSharedValue(min)
    const duration = 700
    const order = props.order? props.order : 0

    const aStyles = useAnimatedStyle(() => ({
        opacity: opacity.value
    }))

    useEffect(() => {
        setTimeout(() =>
            opacity.value = withRepeat(withTiming(max, { duration }), 0, true),
            order*300
        )
    }, []);

    return <Animated.View
        style={[{
            width: props.round? props.height : props.width? props.width : "100%",
            height: props.height,
            backgroundColor: Colors.grey,
            borderRadius: props.round? 999 : Spaces.md,
        }, aStyles]}
    />
};

export default Skeleton;