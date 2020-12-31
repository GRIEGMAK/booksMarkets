import React from 'react';
import {setSort} from "./../actions/sort";

const Sort =(props) => {
    const { setSort } = props
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

export default Sort;