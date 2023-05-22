import { FC } from 'react';
import iconCheck from '../../assets/icon-check.svg';
import iconCross from '../../assets/icon-cross.svg';
import { TodoType } from '../Main/Main';
import './Todo.scss';

interface TodoProps {
    todo: TodoType;
    removeTodo: (id: string) => void;
    completeTodo: (id: string) => void;
}

const Todo: FC<TodoProps> = ({ todo, removeTodo, completeTodo }) => {
    const handleRemove = () => {
        removeTodo(todo.id);
    };

    const handleComplete = () => {
        completeTodo(todo.id);
    };

    return (
        <div className={'todo' + (todo.completed ? ' completed' : '')}>
            <div className="left" onClick={handleComplete}>
                <button className="complete">
                    {todo.completed && <img src={iconCheck} alt="Complete" />}
                </button>
                <span className="description">{todo.description}</span>
            </div>
            <button className="delete" onClick={handleRemove}>
                <img src={iconCross} alt="Delete" />
            </button>
        </div>
    );
};

export default Todo;
