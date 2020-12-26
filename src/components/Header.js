import React from 'react';
import s from './../styles/Header.module.css'

const Header =(props) => {
        return (<div>
                <h2>BooksMarket</h2>
                <div className={s.freePlace}>
                    <button>Cart</button>
                </div>
            </div>
        )
}

export default Header;