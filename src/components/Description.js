import React from 'react';
import ContainerBooksDescription from "./ContainerBooksDescription";

const Description =(props) => {
    let containerBooksDescElements = undefined;
    if(props.state.dataU){
        containerBooksDescElements = props.state.dataU.map(b => <ContainerBooksDescription key={b.id}
                                                                                id={b.id + 1}
                                                                                title={b.title}
                                                                                author={b.author}
                                                                                image={b.image}
                                                                                price={b.price}
                                                                                rating={b.rating}
                                                                                description={b.description}/>
        )
    }
    let idKey = 2;
    return (
        <div>
            {containerBooksDescElements}
        </div>
    )
}

export default Description;