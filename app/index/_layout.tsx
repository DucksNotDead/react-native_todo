import React, {useMemo} from 'react';
import {Stack, useLocalSearchParams} from "expo-router";
import Header from "@/components/header";
import useTodos from "@/hooks/useTodos";

const HomeLayout = () => {
    return <Stack initialRouteName={"index"}>
        <Stack.Screen
            name={"index"}
            options={{
                headerTitle: () => Header(),
            }}
        />
        <Stack.Screen
            name={"[todo]"}
            options={{
                headerTitle: () => {
                    const { todo: todoId } = useLocalSearchParams()
                    const { get } = useTodos()
                    const todo = get(todoId as string)
                    return Header({title: todo?.title})
                },
                headerBackTitle: 'назад'
            }}
        />
    </Stack>
};

export default HomeLayout;