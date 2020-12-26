import React from 'react';
import ImageCard from "./ImageCard";
import s from "./../styles/BooksCard.module.css"
import { NavLink } from "react-router-dom";


const BooksDescription =(props) => {
    let idKey=3;
    return (
        <NavLink to={"/" + idKey}>
            <div className={s.linkCard}>
                <div><h4>{props.id}. {props.title}</h4></div>
                <div><small><i>— {props.author}</i></small></div>
                <ImageCard image={props.image}/>
                <div>Цена: {props.price}р</div>
                <div>Оценка: {props.rating}</div>
                <hr />
            </div>
        </NavLink>
    )
}

export default BooksDescription;