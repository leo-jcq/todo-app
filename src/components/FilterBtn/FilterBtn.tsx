import { FC } from 'react';
import { TodoFilter } from '../TodoList/TodoList';
import './FilterBtn.scss';

interface FilterBtnProps {
    name: TodoFilter;
    setFilter: (newFilter: TodoFilter) => void;
    active: boolean;
}

const FilterBtn: FC<FilterBtnProps> = ({ name, setFilter, active }) => {
    const handleClick = () => {
        setFilter(name);
    };

    return (
        <button className={'filterBtn' + (active ? ' active' : '')} onClick={handleClick}>
            {name[0].toUpperCase() + name.slice(1)}
        </button>
    );
};

export default FilterBtn;
