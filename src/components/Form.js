import React from 'react';

const Form =(props) => {
    return (
        <div>
            <div>id={props.id}</div>
            <img src={props.image}/>
            <div>title={props.title}</div>
            <div>author={props.author}</div>
            <div>price={props.price} p</div>
            <div>rating={props.rating}</div>
            <hr />
        </div>
    )
}

export default Form;