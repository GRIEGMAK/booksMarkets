import React from 'react';

const Form =(props) => {
    return (
        <form onSubmit={props.gettingJson}>
            <div>
                Показать список Книг
            </div>
            <button>
                Нажми
            </button>
        </form>
    )
}

export default Form;