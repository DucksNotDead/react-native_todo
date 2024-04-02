import React, {useEffect, useMemo, useState} from 'react';
import {AppGroupIdType, AppTodoType} from "@/constants/Types";
import {View} from "react-native";
import GroupSelect from "@/components/group-select";
import Input from "@/components/UI/input";
import Icon from "@/components/UI/icon";
import Colors from "@/constants/Colors";
import Spaces from "@/constants/Spaces";
import useTodos from "@/hooks/useTodos";

const TodoForm = (props: {
    itemId?: string
}) => {

    const { get, add, remove } = useTodos()

    const editTodo = props.itemId? get(props.itemId) : null

    useEffect(() => {
        if (editTodo) {
            setText(editTodo.text)
            setGroupId(editTodo.group_id)
        }
    }, [editTodo]);

    const [groupId, setGroupId]
        = useState<AppGroupIdType>(2)
    const [text, setText]
        = useState('')

    const save = () => {
        if (text.length) {
            if (editTodo) {

            }
            else add({
                text, group_id: groupId
            })
            setText('')
            setGroupId(2)
        }
    }

    return (
        <View style={{
            height: "100%",
            width: "100%",
            maxWidth: 700,
            alignSelf: "center",
            gap: Spaces.md
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                zIndex: 999
            }}>
                <GroupSelect active={groupId} onChange={editTodo? undefined : setGroupId}/>
                {!editTodo&& <View style={{
                    backgroundColor: Colors.white,
                    borderRadius: 999,
                    padding: Spaces.sm
                }}>
                    <Icon
                        color={"primary"}
                        size={26}
                        name={"check"}
                        onPress={save}
                    />
                </View>}
            </View>
            <Input
                value={text}
                onChange={setText}
                placeholder={"Что планируете сделать..."}
                disabled={!!editTodo}
            />
        </View>
    );
};

export default TodoForm;