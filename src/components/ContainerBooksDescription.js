import React from 'react';
import BooksDescription from "./BooksDescription";

const ContainerBooksDescription =(props) => {
    const oise = () => {
        if(props.id){return<BooksDescription key={props.key}
                              id={props.id}
                              title={props.title}
                              author={props.author}
                              image={props.image}
                              price={props.price}
                              rating={props.rating}
                              description={props.description}
            />
         }
        }
    return (oise)
};

export default ContainerBooksDescription;