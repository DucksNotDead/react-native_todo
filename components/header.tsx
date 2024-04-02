import React from 'react';
import Logo from "@/components/logo";
import Font from "@/components/UI/font";
import {View} from "react-native";

const Header = (props?: {
    title?: string
}) => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {!props?.title&& <Logo height={32}/>}
            {!props?.title&& <Font color={"black"} size={22} weight={"500"}>ToDo's</Font>}
            {props?.title&& <Font color={"black"} size={18} weight={"500"}>{ props.title }</Font>}
        </View>
    );
};

export default Header;