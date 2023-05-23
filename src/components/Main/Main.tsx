import { FC, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import './Main.scss';

export type TodoType = {
    id: number;
    description: string;
    completed: boolean;
};

const Main: FC = () => {
    const [todoList, setTodoList] = useState<TodoType[]>([]);

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

    return (
        <main className="main">
            <Header />
            <AddTodo addTodo={addTodo} />
            <TodoList
                todoList={todoList}
                setTodoList={setTodoList}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
                clearCompleted={clearCompleted}
            />
            <span className="drag">Drag and drop to reorder list</span>
        </main>
    );
};

export default Main;
