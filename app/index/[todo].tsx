import React from 'react';
import Font from "@/components/UI/font";
import {useLocalSearchParams} from "expo-router";
import useTodos from "@/hooks/useTodos";
import TodoForm from "@/components/todo-form";
import Page from "@/components/UI/page";

const TodoPage = () => {
    const { todo }: { todo: string } = useLocalSearchParams()

    return (
        <Page>
            <TodoForm itemId={todo}/>
        </Page>
    );
};

export default TodoPage;