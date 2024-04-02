import React from 'react';
import Page from "@/components/UI/page";
import TodoCard from "@/components/todo-card";
import {View} from "react-native";
import Spaces from "@/constants/Spaces";
import useTodos from "@/hooks/useTodos";
import Title from "@/components/UI/title";
import Font from "@/components/UI/font";
import Icon from "@/components/UI/icon";
import {useRouter} from "expo-router";

const Index = () => {

    const { todos, toggle, remove } = useTodos()

    const router = useRouter()

    return (
        <Page>
            {todos.length? <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: Spaces.md
            }}>
                {todos.map(todo => (
                    <TodoCard
                        key={todo.id}
                        item={todo}
                        onRemove={remove}
                        onToggle={toggle}
                    />
                ))}
            </View> : <View style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                gap: Spaces.md
            }}>
                <Font size={30} weight={"700"}>Список пуст</Font>
                <Icon onPress={() => router.replace('/create')} name={"plus-circle"} size={40} color={"text"}/>
            </View>}
        </Page>
    )
}

export default Index;