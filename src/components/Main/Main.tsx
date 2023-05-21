import { FC, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Header from '../Header/Header';
import Todos from '../TodoList/TodoList';
import './Main.scss';

export type TodoType = {
    id: string;
    description: string;
    completed: boolean;
};

const Main: FC = () => {
    const [todoList, setTodoList] = useState<TodoType[]>([]);

    const addTodo = (description: string) => {
        const newTodo: TodoType = {
            id: Date.now().toString() + description,
            description: description,
            completed: false
        };
        console.log(newTodo.id);
        setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    };

    const removeTodo = (id: string) => {
        setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
    };

    const completeTodo = (id: string) => {
        setTodoList((prevTodoList) =>
            prevTodoList.map((todo) => ({ ...todo, completed: todo.id === id && !todo.completed }))
        );
    };

    const clearCompleted = () => {
        setTodoList((prevTodoList) => prevTodoList.filter((todo) => !todo.completed));
    };

    return (
        <main className="main">
            <Header />
            <AddTodo addTodo={addTodo} />
            <Todos
                todoList={todoList}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
                clearCompleted={clearCompleted}
            />
        </main>
    );
};

export default Main;
