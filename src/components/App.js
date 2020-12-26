import React from 'react';
import Header from "./Header";
import MainPart from "./MainPart";
import {setBooks} from "../actions/books";
import {connect} from "react-redux";
import s from './../styles/App.module.css'

class App extends React.Component {
    state = {
        dataU: undefined,
        error: undefined,
    };
    componentDidMount = async () => {
        const {setBooks} = this.props;
        let api_url = await fetch(`/books.json`);
        const dataU = await api_url.json();
        setBooks(dataU);
    };
    render() {
        let error = undefined;
        const { books } =this.props;
        if(!books){
            error = "404";
        }
        return (
                <div className={s.Main}>
                    <Header />
                    <MainPart books={books} error={error}/>
                </div>
        )
    }
}

const mapStateToProps = ({ books }) => ({
    books: books.items,
    isLoading: books.isLoading
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);