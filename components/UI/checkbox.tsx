import React from 'react';
import {TouchableOpacity} from "react-native";
import Colors from "@/constants/Colors";
import Icon from "@/components/UI/icon";
import {AppColorType} from "@/constants/Types";

const Checkbox = (props: {
    active: boolean
    onChange: (val: boolean) => void
    color?: string
}) => <TouchableOpacity onPress={() => props.onChange(!props.active)} style={{
    width: 24,
    height: 24,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: Colors[props.active? "transparent" : "text"],
    borderRadius: 999,
    backgroundColor: props.active? props.color? props.color : Colors.primary : Colors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2
}}>
    <Icon name={"check"} color={"white"} size={16}/>
</TouchableOpacity>

export default Checkbox;