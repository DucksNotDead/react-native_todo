import React, {ReactNode} from 'react';
import {ScrollView} from "react-native";
import Spaces from "@/constants/Spaces";

const Page = (props: {
    children?: ReactNode
}) => <ScrollView contentContainerStyle={{
    padding: Spaces.md,
    height: "100%",
}}>{ props.children }</ScrollView>

export default Page;