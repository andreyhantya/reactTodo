import React from 'react';
import './todo-list-item.css';


const TodoListItem = (props) => {
    const {label, onDeleted,
          onToggleDone,
          onToggleImportant} = props;

    const {done, important} = props;


    let classNames = 'todo-list-item';

    if(done){
        classNames += ' done';
    }

    if (important) {
        classNames += ' important';
    }

    return (
        <span className={classNames}>
                <span className='todo-list-item-label'
                      onClick={onToggleDone}
                >
                      {label}
                </span>
              <div className='button-wrap'>
                    <button type='button'
                            className='btn btn-outline-danger btn-sm'
                            onClick={onDeleted}>
                        <i className='fa fa-trash-o'/>
                    </button>
                    <button type='button'
                            className='btn btn-outline-success btn-sm'
                            onClick={onToggleImportant}>
                        <i className='fa fa-exclamation'/>
                    </button>

                </div>
            </span>
    );
};

export default TodoListItem