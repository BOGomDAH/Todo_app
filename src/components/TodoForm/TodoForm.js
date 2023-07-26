import {Component} from "react";

import './TodoForm.css'


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onCreateItem(this.state.task)
    }

    onValueChange = (e) => {
        this.setState({task: e.target.value})
    }

    render(){
        return (
            <form className="todo__form" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Create a new todo…" required minLength={2} onChange={this.onValueChange}/>
                <button>Create</button>
            </form>
        )
    }
}

export default TodoForm;