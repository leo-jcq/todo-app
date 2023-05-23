import { FC } from 'react';
import iconCheck from '../../assets/icon-check.svg';
import iconCross from '../../assets/icon-cross.svg';
import { TodoType } from '../Main/Main';
import './Todo.scss';

interface TodoProps {
    todo: TodoType;
    removeTodo: (id: number) => void;
    completeTodo: (id: number) => void;
}

const Todo: FC<TodoProps> = ({ todo, removeTodo, completeTodo }) => {
    const handleRemove = () => {
        removeTodo(todo.id);
    };

    const handleComplete = () => {
        completeTodo(todo.id);
    };

    return (
        <li className={'todo' + (todo.completed ? ' completed' : '')}>
            <div className="left">
                <button className="complete" onClick={handleComplete}>
                    {todo.completed && <img src={iconCheck} alt="Complete" />}
                </button>
                <span className="description" onClick={handleComplete}>
                    {todo.description}
                </span>
            </div>
            <button className="delete" onClick={handleRemove}>
                <img src={iconCross} alt="Delete" />
            </button>
        </li>
    );
};

export default Todo;
