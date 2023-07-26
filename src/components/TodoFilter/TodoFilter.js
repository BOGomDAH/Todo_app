import React from 'react';

import './TodoFilter.css'

const TodoFilter = ({onFilter, mode}) => {
    const buttonsData = [
        {mode: 'all', name: 'All'},
        {mode: 'active', name: 'Active'},
        {mode: 'completed', name: 'Completed'}
    ]

    return (
        <div className="todo__filter">
            {buttonsData.map((item, index) => {
                const active = mode === item.mode
                const clazz = active ? 'active' : ''
                return <button className={clazz} onClick={() => onFilter(item.mode)} key={index}>{item.name}</button>
            })}
        </div>
    );
};

export default TodoFilter;