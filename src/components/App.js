import React, {useEffect} from 'react';
import Header from "./Header";
import MainPart from "./MainPart";
import s from './../styles/App.module.css'
import * as booksActions from "../actions/books";
import {connect} from "react-redux";
import { bindActionCreators} from "redux";
import orderBy from 'lodash/orderBy'
import * as sortActions from "../actions/sort";

const sortB = (books, sortR) => {
    switch (sortR) {
        case 'all':
            return orderBy(books, 'rating', 'asc');
        case 'popular' :
            alert('popular')
            return orderBy(books, 'rating', 'asc');
        case 'author' :
            return orderBy(books, 'author', 'asc');
        case 'price_high' :
            return orderBy(books, 'price', 'asc');
        case 'price_low' :
            return orderBy(books, 'price', 'desc');
        default:
            return books;
    }
}


const App = (props) => {
    const fetchBooks = async () => {
            const { setBooks } = props;
            let api_url = await fetch(`/books.json`);
            setBooks(await api_url.json());
        };
    useEffect(fetchBooks);
    const { books, isReady, setSort } = props;
    let error = undefined;
    if(!books){
        error = "404";
    }
        return (
            <div className={s.Main}>
                <Header setSort={setSort}/>
                {!isReady
                    ?'Загрузка...'
                    : <MainPart books={books} error={error}/>}
            </div>
        )
};

const mapStateToProps = ({ books }) => ({
    books: sortB(books.items, books.sortR),
    isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
    ...bindActionCreators(sortActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);