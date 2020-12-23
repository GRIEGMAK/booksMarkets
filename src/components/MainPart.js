import React from 'react';
import Form from "./Form";

const MainPart =(props) => {
    let formElements = undefined;
    if(props.state.dataU){
        formElements = props.state.dataU.map(b => <Form id={b.id}
                                                            title={b.title}
                                                            author={b.author}
                                                            image={b.image}
                                                            price={b.price}
                                                            rating={b.rating}/>
        )
    }
    console.log(props.state)
    return (
        <div>
            {formElements}
        </div>
    )
}

export default MainPart;