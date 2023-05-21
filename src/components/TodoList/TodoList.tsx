import { FC, useMemo } from 'react';
import { TodoType } from '../Main/Main';
import Todo from '../Todo/Todo';
import './TodoList.scss';

interface TodoListProps {
    todoList: TodoType[];
    removeTodo: (id: string) => void;
    completeTodo: (id: string) => void;
    clearCompleted: () => void;
}

const TodoList: FC<TodoListProps> = ({ todoList, removeTodo, completeTodo, clearCompleted }) => {
    const itemsLeft = useMemo(() => todoList.filter((todo) => !todo.completed).length, [todoList]);

    return (
        <div className="todos">
            {todoList.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    completeTodo={completeTodo}
                />
            ))}
            <div className="infos">
                <span className="items">{itemsLeft} items left</span>
                <button className="clear" onClick={clearCompleted}>
                    Clear Completed
                </button>
            </div>
        </div>
    );
};

export default TodoList;
