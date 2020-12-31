import React from 'react';
import s from './../styles/Header.module.css'
import Sort from "./../containers/Sort";

const Header =(props) => {
    const { setSort } = props
        return (<div>
                <h2>BooksMarket</h2>
                <div className={s.freePlace}>
                    <Sort setSort={setSort}/><button>Cart (Корзина)</button>
                </div>
            </div>
        )
}

export default Header;