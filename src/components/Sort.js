import React, {useState} from 'react';
import {bindActionCreators} from "redux";
import * as sortActions from './../actions/sort'
import {connect} from "react-redux";

const Sort =(props) => {
    const [activeItem, setHandle]=useState('all')
    const handleItemClick = (name) => {
        const { setSort } = props;
        setHandle(name);
        setSort(name);
    };
    return (
        <div>
            <button onClick={() => handleItemClick('all')}>Все</button>
            <button onClick={() => handleItemClick('popular')}>Популярность</button>
            <button onClick={() => handleItemClick('price_high')}>Цены(с дешевых)</button>
            <button onClick={() => handleItemClick('price_low')}>Цены(с дорогих)</button>
            <button onClick={() => handleItemClick('author')}>Автор</button>
            <input name="Search" type="text" placeholder="Search"/><button>Искать</button>
            {activeItem}
        </div>
    )
}
const mapStateToProps = ({ books }) => ({
    sortR: books.sortR,
})
const mapDispatchToProps = dispatch => ({
        ...bindActionCreators(sortActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Sort);