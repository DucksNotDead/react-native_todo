import React, {ReactNode} from 'react';
import {Text} from "react-native";
import {AppColorType} from "@/constants/Types";
import Colors from "@/constants/Colors";

const Font = (props: {
    children: ReactNode|string,
    color?: AppColorType
    size?: number
    weight?: "300"|"500"|"700"
    crossed?: boolean
}) => <Text style={{
    textDecorationLine: props.crossed? "line-through" : "none",
    color: Colors[props.color? props.color : "text"],
    fontSize: props.size? props.size : 20,
    fontWeight: props.weight? props.weight : "300"
}}>{ props.children }</Text>

export default Font;