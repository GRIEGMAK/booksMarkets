import React from 'react';
import ImageCard from "./ImageCard";
import s from "./../styles/BooksCard.module.css"

const BooksCard =(props) => {
    let link = '/' + props.id;
    return (
        <div className={s.linkCard}>
            <a href={link}>
            <div><h4>{props.id}. {props.title}</h4></div>
            <div><small><i>— {props.author}</i></small></div>
            <ImageCard image={props.image}/>
            <div>Цена: {props.price}р</div>
            <div>Оценка: {props.rating}</div>
            <hr />
            </a>
        </div>
    )
}

export default BooksCard;