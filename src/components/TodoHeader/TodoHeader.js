import moon from '../../assets/moon.svg'

import './TodoHeader.css'

const TodoHeader = ({onChangeTheme}) => {
    return (
        <div className="todo__header">
            <h3>TODO</h3>
            <button className="ico" onClick={onChangeTheme}>
                <img src={moon} alt="mode icon"/>
            </button>
        </div>
    );
};

export default TodoHeader;