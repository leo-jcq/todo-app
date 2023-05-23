import { FC, useMemo, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import Filters from '../Filters/Filters';
import { TodoType } from '../Main/Main';
import Todo from '../Todo/Todo';
import './TodoList.scss';

interface TodoListProps {
    todoList: TodoType[];
    setTodoList: (todoList: TodoType[]) => void;
    removeTodo: (id: number) => void;
    completeTodo: (id: number) => void;
    clearCompleted: () => void;
}

export type TodoFilter = 'all' | 'active' | 'completed';

const TodoList: FC<TodoListProps> = ({
    todoList,
    setTodoList,
    removeTodo,
    completeTodo,
    clearCompleted
}) => {
    const [filter, setFilter] = useState<TodoFilter>('all');

    const itemsLeft = useMemo(() => todoList.filter((todo) => !todo.completed).length, [todoList]);

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
        <div className="todos">
            <ReactSortable tag="ul" className="todoList" list={todoList} setList={setTodoList}>
                {currentTodoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        completeTodo={completeTodo}
                    />
                ))}
            </ReactSortable>
            <div className="infos">
                <span className="items">{itemsLeft} items left</span>
                <Filters currentFilter={filter} setFilter={setFilter} />
                <button className="clear" onClick={clearCompleted}>
                    Clear Completed
                </button>
            </div>
        </div>
    );
};

export default TodoList;
