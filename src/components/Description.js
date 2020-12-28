import React from 'react';
import ContainerBooksDescription from "./ContainerBooksDescription";

const Description =(props) => {
    let containerBooksDescElements = undefined;
    if(props.books){
        containerBooksDescElements = props.books.map(b => <ContainerBooksDescription key={b.id}
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
        <div>
            {containerBooksDescElements}
        </div>
    )
}

export default Description;