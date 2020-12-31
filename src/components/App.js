import React, {useEffect} from 'react';
import Header from "./Header";
import MainPart from "./MainPart";
import s from './../styles/App.module.css'

const App = (props) => {
    const fetchBooks = async () => {
            const { setBooks } = props;
            let api_url = await fetch(`/books.json`);
            setBooks(await api_url.json());
        }
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
    }
;

export default App;