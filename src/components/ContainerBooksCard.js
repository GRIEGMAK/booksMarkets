import React from 'react';
import BooksCard from './BooksCard';

const ContainerBooksCard =(props) => {
    return (
        <div>
        <BooksCard key={props.id}
                       id={props.id}
                       title={props.title}
                       author={props.author}
                       image={props.image}
                       price={props.price}
                       rating={props.rating}
                       description={props.description}
            />
        </div>
    )
}

export default ContainerBooksCard;