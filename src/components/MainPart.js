import React from 'react';

const MainPart =(props) => {
    return (
        <div>
            <div>id={props.id}</div>
            <div>title={props.title}</div>
            <div>author={props.author}</div>
    <div>price={props.price} p</div>
    <div>rating={props.rating}</div>
        </div>
    )
}

export default MainPart;