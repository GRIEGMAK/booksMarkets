import React, {useState} from 'react';
import {bindActionCreators} from "redux";
import * as sortActions from './../actions/sort'
import {connect} from "react-redux";
import {setSort} from "./../actions/sort";

const Sort =(props) => {
    return (
        <div>
            <button onClick={() => setSort('all')}>Все</button>
            <button onClick={() => setSort('popular')}>Популярность</button>
            <button onClick={() => setSort('price_high')}>Цены(с дешевых)</button>
            <button onClick={() => setSort('price_low')}>Цены(с дорогих)</button>
            <button onClick={() => setSort('author')}>Автор</button>
            <input name="Search" type="text" placeholder="Search"/><button>Искать</button>
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