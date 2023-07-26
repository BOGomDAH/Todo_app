import './TodoItem.css'

const TodoItem = ({task, onToggleProp, active, completed}) => {
    return (
        <li className={`todo__list-item ${active ? 'active' : ''} ${completed ? 'completed' : ''}`}>
            <button onClick={onToggleProp} data-toggle="active"></button>
            <span onClick={onToggleProp} data-toggle="completed">{task}</span>
        </li>
    );
};

export default TodoItem;