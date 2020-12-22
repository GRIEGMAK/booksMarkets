import React from 'react';
import Form from "./Form";

const ContainerForm =(props) => {
        return (<div>
            <form onSubmit={props.gettingJson}>
                <div>
                    Показать список Книг
                </div>
                <button>
                    Нажми
                </button>
            </form>
            </div>
        )
}

export default ContainerForm;