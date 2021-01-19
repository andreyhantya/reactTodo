import React, {Component} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }

    onLabelChange = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    onMarkImportant = () => {
        this.setState(({ important }) =>{
            return {
                important: !important
            }
        })
    }

    render() {
        const {label, onDeleted,
               onToggleDone, onToggleImportant} = this.props;
        const {done, important} = this.state;

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
    }
}
