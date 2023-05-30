import { useEffect, useState } from 'react';
import { useTodoListType } from '../types/useTodoListType';

function useTodoList(): useTodoListType {
    const [todoList, setTodoList] = useState<TodoType[]>(
        JSON.parse(localStorage.getItem('totoList') ?? '[]')
    );

    useEffect(() => localStorage.setItem('totoList', JSON.stringify(todoList)), [todoList]);

    const addTodo = (description: string) => {
        const newTodo: TodoType = {
            id: Date.now(),
            description: description,
            completed: false
        };
        setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    };

    const removeTodo = (id: number) => {
        setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
    };

    const completeTodo = (id: number) => {
        setTodoList((prevTodoList) =>
            prevTodoList.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const clearCompleted = () => {
        setTodoList((prevTodoList) => prevTodoList.filter((todo) => !todo.completed));
    };

    return [todoList, setTodoList, addTodo, removeTodo, completeTodo, clearCompleted];
}

export default useTodoList;
