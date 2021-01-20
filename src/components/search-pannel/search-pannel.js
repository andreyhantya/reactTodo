import React, {Component} from 'react';
import './search-pannel.css'
import ItemStatusFilter from "../item-status-filter";


export default class SearchPanel extends Component {
    render() {
        return (
            <div className='search-input'>
                <input placeholder='search'/>
                <ItemStatusFilter/>
            </div>
        );
    }
}


