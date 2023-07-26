import TodoItem from "../TodoItem/TodoItem";

import './TodoList.css'

const TodoList = ({data, onToggleProp}) => {
    if (data.length) {
        return (
            <ul className="todo__list">
                {data.map((item) => {
                    return <TodoItem key={item.id} task={item.task} active={item.active} completed={item.completed} onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}/>
                })}
            </ul>
        );
    }
    return (
        <div className="todo__list" style={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <span>Todo not found.</span>
        </div>
    )
};

export default TodoList;