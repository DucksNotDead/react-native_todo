import React from 'react';
import {TextInput} from "react-native";
import Spaces from "@/constants/Spaces";
import Colors from "@/constants/Colors";

const Input = (props: {
    value: string
    onChange: (val: string) => void
    placeholder?: string
    disabled?: boolean
}) => {
    return (
        <TextInput
            value={props.value}
            onChange={e => props.onChange(e.nativeEvent.text)}
            multiline={true}
            placeholder={props.placeholder}
            placeholderTextColor={Colors.text}
            editable={!props.disabled}
            style={{
                paddingHorizontal: Spaces.lg,
                paddingTop: Spaces.lg,
                paddingBottom: Spaces.md,
                backgroundColor: Colors.white,
                borderRadius: Spaces.md,
                color: Colors.black,
                fontWeight: "300",
                fontSize: 20,
                height: 200,
                //@ts-ignore
                outlineStyle: "none",
            }}
        />
    );
};

export default Input;