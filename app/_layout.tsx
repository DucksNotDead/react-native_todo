import React, {useEffect} from 'react';
import {Tabs} from "expo-router";
import {AppIconType} from "@/constants/Types";
import Icon from "@/components/UI/icon";
import {StatusBar} from "react-native";
import Header from "@/components/header";
import {ClickOutsideProvider} from "react-native-click-outside";

const MainLayout = () => {

    const barIcon = (icon: AppIconType, focused: boolean) => (
        <Icon name={icon} size={24} color={focused? "primary" : "grey"}/>
    )

    useEffect(() => {
        StatusBar.setBarStyle('dark-content')
    }, [StatusBar]);

    return (
        <ClickOutsideProvider>
            <Tabs screenOptions={{
                unmountOnBlur: true
            }}>
                <Tabs.Screen
                    name={"index"}
                    options={{
                        href: '/',
                        title: 'Дела',
                        tabBarIcon: ({focused}) => barIcon("list", focused),
                        header: () => null
                    }}
                />
                <Tabs.Screen
                    name={"create"}
                    options={{
                        href: '/create',
                        title: 'Добавить',
                        tabBarIcon: ({focused}) => barIcon("plus", focused),
                        headerTitle: () => Header()
                    }}
                />
            </Tabs>
        </ClickOutsideProvider>
    );
};

export default MainLayout;