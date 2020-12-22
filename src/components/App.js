import React from 'react';
import { connect } from 'react-redux'
import { setBooks } from "../actions/books";
import axios from 'axios';
import ContainerForm from "./ContainerForm";


class App extends React.Component {
    state = {
        id: undefined,
        author: undefined,
        title: undefined,
        image: undefined,
        price: undefined,
        rating: undefined,
    };
    componentDidMount() {
        axios.get(`/books.json`).then(({data}) => {
            this.setState(data);
        });
    }
    gettingJson = async(e) => {
        e.preventDefault()
        const api_url = await fetch(`/books.json`)
        const dataU = api_url.json();
        this.setState({
            id: dataU.id,
            author: dataU.author,
            title: dataU.title,
            image: dataU.image,
            price: dataU.price,
            rating: dataU.rating,
        })
    }
    render() {
        const { books, isReady } = this.props;
        const dataBooks  = ({
            ...this.state
        });
        console.log(dataBooks);
        const { id, title } = dataBooks;
        console.log(id)
        console.log(dataBooks)
        return (
            <div>
                <ul>
                    {!isReady
                        ? 'Загрузка...'
                        : books.title.map(book => (
                            <li><b>{book.title}</b></li>
                        ))
                    }
                </ul>
                <ContainerForm />
            </div>
        )
    }
}

const mapStateToProps =  ({ books }) => ({
    books: books.items,
    isReady: books.isReady
});

const mapDispatchToProps = (dispatch) =>({
    state: books => {dispatch(setBooks(books))}
});

export default connect (mapStateToProps, mapDispatchToProps)(App);