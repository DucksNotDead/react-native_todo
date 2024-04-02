import React from 'react';
import {Feather} from "@expo/vector-icons";
import {AppColorType, AppIconType} from "@/constants/Types";
import Colors from "@/constants/Colors";
import {TouchableOpacity} from "react-native";

const Icon = (props: {
    name: AppIconType
    color?: AppColorType
    size?: number
    onPress?: () => void
}) => <TouchableOpacity disabled={!props.onPress} onPress={props.onPress}>
    <Feather
        name={props.name}
        size={props.size ? props.size : 24}
        color={Colors[props.color ? props.color : "primary"]}
    />
</TouchableOpacity>

export default Icon;