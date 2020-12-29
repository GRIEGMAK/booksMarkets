import React, {useState} from 'react';

const Sort =() => {
    const [handle, setHandle]=useState('all')
    console.log(handle)
    return (
        <div>
            <button onClick={()=>{setHandle('all')}}>Все</button>
            <button onClick={()=>{setHandle('popular')}}>Популярность</button>
            <button onClick={()=>{setHandle('price_high')}}>Цены(с дешевых)</button>
            <button onClick={()=>{setHandle('price_low')}}>Цены(с дорогих)</button>
            <button onClick={()=>{setHandle('author')}}>Автор</button>
            <input name="Search" type="text" placeholder="Search"/>
        </div>
    )
}

export default Sort;