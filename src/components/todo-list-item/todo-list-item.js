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
        const {label} = this.props;
        const {done, important} = this.state;

        let classNames = 'todo-list-item'

        done ? classNames += 'done' : null;
        important ?  classNames += ' important' : null;

        return (
            <span className={classNames}>
                <span className='todo-list-item-label'
                      onClick={this.onLabelChange}
                >
                      {label}
                </span>
              <div className='button-wrap'>
                    <button type='button' className='btn btn-outline-danger btn-sm'>
                        <i className='fa fa-trash-o'/>
                    </button>
                    <button type='button'
                            className='btn btn-outline-success btn-sm'
                            onClick={this.onMarkImportant}>
                        <i className='fa fa-exclamation'/>
                    </button>
                </div>
            </span>
        );
    }
}
