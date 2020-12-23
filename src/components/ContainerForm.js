import React from 'react';

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