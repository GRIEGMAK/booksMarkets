import React from 'react';
import Form from "./Form";

const MainPart =(props) => {
    return (
        <div>
            <Form image={props.image}
                  id={props.id}
                  title={props.title}
                  author={props.author}
                  price={props.price}
                  rating={props.rating}/>
        </div>
    )
}

export default MainPart;