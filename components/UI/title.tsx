import React from 'react';
import Font from "@/components/UI/font";
import {AppColorType} from "@/constants/Types";

const Title = (props: {
    children: string
    color?: AppColorType
    first?: boolean,
}) => <Font
    size={props.first? 36 : 22}
    color={props.color? props.color : "black"}
    weight={props.first? "700" : "500"}
>{ props.children }</Font>;


export default Title;