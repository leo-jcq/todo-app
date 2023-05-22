import { FC } from 'react';
import FilterBtn from '../FilterBtn/FilterBtn';
import { TodoFilter } from '../TodoList/TodoList';
import './Filters.scss';

interface FiltersProps {
    currentFilter: TodoFilter;
    setFilter: (newFilter: TodoFilter) => void;
}

const filters: TodoFilter[] = ['all', 'active', 'completed'];

const Filters: FC<FiltersProps> = ({ currentFilter, setFilter }) => {
    return (
        <div className="filters">
            {filters.map((filter) => (
                <FilterBtn
                    key={filter}
                    name={filter}
                    setFilter={setFilter}
                    active={filter === currentFilter}
                />
            ))}
        </div>
    );
};

export default Filters;
