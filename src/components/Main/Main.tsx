import { FC } from 'react';
import useTodoList from '../../hooks/useTodoList';
import AddTodo from '../AddTodo/AddTodo';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import './Main.scss';

const Main: FC = () => {
    const [todoList, setTodoList, addTodo, removeTodo, completeTodo, clearCompleted] =
        useTodoList();

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
