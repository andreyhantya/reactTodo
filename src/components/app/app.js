import {Component} from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-pannel";
import TodoList from "../todo-list";
import './app.css'
import ItemAddForm from "../item-add-form";


export default class App extends Component {
    maxId = 100;

    state = {
        todoData : [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Build react app'),
            this.createTodoItem('Learn JS'),
        ]
    }

    createTodoItem (label){
        return {
            label : label,
            important : false,
            done : false,
            id : this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
          const idx = todoData.findIndex(el => el.id  === id)

            return {
                todoData: [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx+1)
                ]
            };
        })
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text)

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ]
            return {
                todoData : newArr
            }
        })
        console.log(text)
    }

    onToggleImportant = (id) => {
        console.log('important ', id)
    }

    onToggleDone = (id) => {
        console.log('done ', id)
    }

    render () {
        return (
            <div className='app'>
                <AppHeader />
                <SearchPanel />
                <TodoList todos={this.state.todoData}
                          onDeleted = { (id) => this.deleteItem(id) }
                          onToggleImportant = {this.onToggleImportant}
                          onToggleDone = {this.onToggleDone}/>
                <ItemAddForm
                    onItemAdded = {(text) => this.addItem(text)}

                />
            </div>
        );
    }
}

