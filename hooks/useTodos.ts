import storage from '@react-native-async-storage/async-storage';
import {AppGroupIdType, AppTodoType} from "@/constants/Types";
import {useCallback, useEffect, useState} from "react";

const key = 'todos'

const getAll = async () => {
    const jsonValue = await storage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
}

const set = (items: AppTodoType[]) => {
    const jsonValue = JSON.stringify(items);
    storage.setItem(key, jsonValue).then()
}

export default () => {
    const [todos, setTodos] = useState<AppTodoType[]>([])

    const update = () => {
        getAll().then(res => {
            setTodos(res)
        })
    }

    const toggle = (id: string, value: boolean) => {
        setTodos(prev => {
            const index = prev.findIndex(state => state.id === id)
            prev[index].checked = value
            set(prev)
            return [...prev]
        })
    }

    const remove = (id: string) => {
        setTodos(prev => {
            const data = prev.filter(p => p.id !== id)
            set(data)
            return data
        })
    }

    const add = (data: {
        text: string
        group_id: AppGroupIdType
    }) => {
        setTodos(prev => {
            const short = {
                title: data.text,
                text: data.text
            }
            const max = {
                title: 12,
                text: 50
            }
            const min = (key: "title"|"text") => {
                if (short[key].length >= max[key])
                    short[key] = short[key].substring(0, max[key]).replace(/\s+$/, '') + '...'
            }
            min("title")
            min("text")
            const item = [...prev, {
                ...data,
                short: short.text,
                title: short.title,
                id: 'td_' + Date.now(),
                checked: false
            }]
            set(item)
            return item
        })
    }

    const get = useCallback((id: string) => todos.find(t => t.id === id), [todos])

    useEffect(() => update(), []);

    return { todos, add, remove, get, toggle, update }
}