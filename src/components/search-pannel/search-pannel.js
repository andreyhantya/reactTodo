import React from 'react';
import './search-pannel.css'
import ItemStatusFilter from "../item-status-filter";

const SearchPanel = () => {
    return (
    <div className='search-input'>
        <input  placeholder='search'/>
        <ItemStatusFilter />
    </div>
    );

};

export default SearchPanel;