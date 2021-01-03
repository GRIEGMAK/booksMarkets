import React from "react";
import BookCard from "../containers/BookCard";
import s from './../styles/CBooksCard.module.css'

const CBooksCard = (props) => {
    const {books} = props
    let containerBooksElements = undefined;
    if (props.books) {
        containerBooksElements = books.map((book, i) => <BookCard key={i} {...book} />)
    }
    return (
        <div className={s.booksCard}>
            {containerBooksElements}
        </div>
    )
}
export default CBooksCard;
