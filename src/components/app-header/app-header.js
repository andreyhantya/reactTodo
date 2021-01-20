import React from 'react';
import './app-header.css'

const AppHeader = (props) => {
    const {toDo, done} = props;
    return (
        <div className='app-header'>
            <h1>My Todo list</h1>
            <h2>{toDo} more todo, {done} done</h2>
        </div>
    );
}

export default AppHeader;