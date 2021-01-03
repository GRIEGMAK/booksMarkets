import React, {useEffect} from 'react';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import MainPart from "./MainPart";
import {BrowserRouter, Route, Switch} from "react-router-dom";


const App = (props) => {
    const fetchBooks = async () => {
        const {setBooks} = props;
        let api_url = await fetch(`/books.json`);
        setBooks(await api_url.json());
    };
    useEffect(fetchBooks);
    const {books, isReady} = props;
    let booksId = undefined
    if (books) {
        const { id } = books
        booksId = "/" + id
    }
    return (
        <div>
            <Menu/>
            <Filter/>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <MainPart books={books} isReady={isReady}/>
                    </Route>
                    <Route path={booksId}>
                        <h1>Hdkjnck</h1>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default App;
