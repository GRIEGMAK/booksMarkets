import React from 'react';
import Form from "./Form";

const MainPart =(props) => {
    let formElements = undefined;
    if(props.state.dataU){
        formElements = props.state.dataU.map(b => <Form key={b.id}
                                                        id={b.id + 1}
                                                        title={b.title}
                                                        author={b.author}
                                                        image={b.image}
                                                        price={b.price}
                                                        rating={b.rating}
            />
        )
    }
    return (
        <div>
        {formElements}
        <div>{props.error}</div>
        </div>
    )
}

export default MainPart;