import { FC, useState } from 'react';
import Header from '../Header/Header';
import './Main.scss';

interface Todo {
    text: string;
    completed: boolean;
}

const Main: FC = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    return (
        <main className="main">
            <Header />
        </main>
    );
};

export default Main;
