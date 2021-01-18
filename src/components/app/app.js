import AppHeader from "../app-header";
import SearchPanel from "../search-pannel";
import TodoList from "../todo-list";
import './app.css'
const App = () => {

    const todoData = [
        {label : 'Drink coffee', important : false, id : '1'},
        {label : 'Build react app', important : true, id : '2'},
        {label : 'Learn JS', important : false, id : '3'},
    ]

    return (
        <div className='app'>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;