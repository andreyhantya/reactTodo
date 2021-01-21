import React, {Component} from 'react';
import './search-pannel.css'
import ItemStatusFilter from "../item-status-filter";


export default class SearchPanel extends Component {

    state = {
        term : ''
    }

    onSearch = (e) => {
        const term = e.target.value
        this.setState({term});
        this.props.onSearchChange(term);
    }

    render() {
        return (
            <div className='search-input'>
                <input placeholder='search' onChange = {this.onSearch}
                />

            </div>
        );
    }
}


