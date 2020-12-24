import React from 'react';
import ImageCard from "./ImageCard";

const BooksCard =(props) => {
    return (
        <div>
            <div>{props.id}<h4>{props.title}</h4></div>
            <div><small><i>— {props.author}</i></small></div>
            <ImageCard image={props.image}/>
            <div>Цена: {props.price}р</div>
            <div>Оценка: {props.rating}</div>
            <hr />
        </div>
    )
}

export default BooksCard;