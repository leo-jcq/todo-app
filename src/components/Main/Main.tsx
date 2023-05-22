import { FC, useMemo, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Filters from '../Filters/Filters';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import './Main.scss';

export type TodoType = {
    id: string;
    description: string;
    completed: boolean;
};

export type TodoFilter = 'all' | 'active' | 'completed';

const Main: FC = () => {
    const [todoList, setTodoList] = useState<TodoType[]>([]);
    const [filter, setFilter] = useState<TodoFilter>('all');

    const addTodo = (description: string) => {
        const newTodo: TodoType = {
            id: Date.now().toString() + description,
            description: description,
            completed: false
        };
        setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    };

    const removeTodo = (id: string) => {
        setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
    };

    const completeTodo = (id: string) => {
        setTodoList((prevTodoList) =>
            prevTodoList.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const clearCompleted = () => {
        setTodoList((prevTodoList) => prevTodoList.filter((todo) => !todo.completed));
    };

    const currentTodoList = useMemo(() => {
        switch (filter) {
            case 'active':
                return todoList.filter((todo) => !todo.completed);
            case 'completed':
                return todoList.filter((todo) => todo.completed);
            default:
                return todoList;
        }
    }, [todoList, filter]);

    return (
        <main className="main">
            <Header />
            <AddTodo addTodo={addTodo} />
            <TodoList
                todoList={currentTodoList}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
                clearCompleted={clearCompleted}
            />
            <Filters currentFilter={filter} setFilter={setFilter} />
        </main>
    );
};

export default Main;
