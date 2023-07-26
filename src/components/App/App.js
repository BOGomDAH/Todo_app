import {Component} from "react";

import TodoHeader from "../TodoHeader/TodoHeader";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import TodoFilter from "../TodoFilter/TodoFilter";

import './App.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {task: 'Jog around the park 3x', active: true, completed: false, id: 0},
                {task: '10 minutes meditation', active: false, completed: false, id: 1},
                {task: 'Read for 1 hour', active: false, completed: true, id: 2},
                {task: 'Pick up groceries', active: true, completed: false, id: 3},
                {task: 'Complete online JavaScript course', active: true, completed: true, id: 4}
            ],
            filter: 'all',
            theme: 'light'
        }
        this.maxId = 5
    }

    onChangeTheme = () => {
        if(this.state.theme === 'dark'){
            this.setState({theme: 'light'})
        }else {
            this.setState({theme: 'dark'})
        }
        document.body.classList.toggle('dark')
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    onCreateItem = (task) => {
        const newItem = {
            task,
            active: false,
            completed: false,
            id: this.maxId++
        }
        this.setState(({data}) => ({
            data: [...data, newItem]
        }))
        console.log(newItem)
    }

    onClearCompleted = () => {
        this.setState(({data}) => ({
            data: data.filter(item => {
                return item.completed === false
            })
        }))
    }

    filterApp = (mode, items) => {
        if (mode === 'active') {
            return items.filter((item) => item.active === true)
        }
        if (mode === 'completed') {
            return items.filter((item) => item.completed === true)
        }

        return items
    }

    onUpdateFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        const visibleData = this.filterApp(this.state.filter, this.state.data)

        return (
            <div className="App">
                <div className="theme">
                    <div className="background"></div>
                    <div className="content">
                        <div className="todo">
                            <TodoHeader onChangeTheme={this.onChangeTheme}></TodoHeader>
                            <TodoForm onCreateItem={this.onCreateItem}></TodoForm>
                            <TodoList data={visibleData} onToggleProp={this.onToggleProp}></TodoList>
                            <div className="todo-bottom">
                                <span>{visibleData.length} items left</span>
                                <TodoFilter onFilter={this.onUpdateFilter} mode={this.state.filter}></TodoFilter>
                                <button onClick={this.onClearCompleted}>Clear Completed</button>
                            </div>
                        </div>
                        <footer>
                            Copyright 2023 all right reserved.
                        </footer>
                    </div>

                </div>
            </div>
        )
    }
}

export default App;