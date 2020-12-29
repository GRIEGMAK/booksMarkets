import React from 'react';
import s from './../styles/Header.module.css'
import Sort from "./Sort";

const Header =() => {
        return (<div>
                <h2>BooksMarket</h2>
                <div className={s.freePlace}>
                    <Sort/><button>Cart (Корзина)</button>
                </div>
            </div>
        )
}

export default Header;