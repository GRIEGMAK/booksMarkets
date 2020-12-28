import React, {useEffect, useState} from 'react';
import Header from "./Header";
import MainPart from "./MainPart";
import s from './../styles/App.module.css'

const App = (props) => {
    useEffect(async () => {
        const { setBooks } = props;
        let api_url = await fetch(`/books.json`);
        setBooks(await api_url.json());
        });
    const { books, isReady } = props;
    let error = undefined;
    if(!books){
        error = "404";
    }
        return (
            <div className={s.Main}>
                <Header/>
                <MainPart books={books} error={error}/>
            </div>
        )
    }
;

export default App;