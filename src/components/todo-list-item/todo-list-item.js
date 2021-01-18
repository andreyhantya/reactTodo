import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important }) => {
    const style = {
        color : important ? 'tomato' : 'black'
    }
    return (
        <span className='todo-list-item'>
            <span className='todo-list-item'
                  style={style}>
                { label }
            </span>
            <div className='button-wrap'>
                <button type='button' className='btn btn-outline-success btn-sm'>
                    <i className='fa fa-exclamation' />
                </button>
                <button type='button' className='btn btn-outline-danger btn-sm'>
                    <i className='fa fa-trash-o' />
                </button>
            </div>

        </span>
        );
}

export default TodoListItem;