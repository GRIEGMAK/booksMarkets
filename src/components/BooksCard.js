import React from 'react';
import ImageCard from "./ImageCard";
import s from "./../styles/BooksCard.module.css"

const BooksCard =(props) => {
    return (
            <div className={s.linkCard}>
                <div className={s.titleBooks}>
                <i>{props.title}</i>
                </div>
                <div className={s.descBooks}>
                    <small><i>— {props.author}</i></small>
                    <ImageCard image={props.image}/>
                    <div>Цена: {props.price}р</div>
                    <div>Оценка: {props.rating}</div>
                </div>
            </div>
    )
}

export default BooksCard;