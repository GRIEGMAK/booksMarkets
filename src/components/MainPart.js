import React from 'react';
import ContainerBooksCard from "./BooksCard";
import s from './../styles/MainPart.module.css'

const MainPart =(props) => {
    let containerBooksElements = undefined;
    if(props.books){
        containerBooksElements = props.books.map(b => <ContainerBooksCard key={b.id}
                                                                          id={b.id + 1}
                                                                          title={b.title}
                                                                          author={b.author}
                                                                          image={b.image}
                                                                          price={b.price}
                                                                          rating={b.rating}
                                                                          description={b.description}/>
        )
    }
    return (
        <div className={s.booksCard}>
        {containerBooksElements}
        <div>{props.error}</div>
        </div>
    )
}

export default MainPart;