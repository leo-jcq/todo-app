import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import './AddTodo.scss';

interface AddTodoProps {
    addTodo: (description: string) => void;
}

const AddTodo: FC<AddTodoProps> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && text != '') {
            addTodo(text);
            setText('');
        }
    };

    return (
        <div className="addTodo">
            <span className="circle"></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                value={text}
                onChange={handleTextChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default AddTodo;
