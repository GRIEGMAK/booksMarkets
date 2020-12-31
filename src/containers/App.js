import * as booksActions from "../actions/books";
import { bindActionCreators} from "redux";
import {connect} from "react-redux";
import App from "../components/App";
import orderBy from 'lodash/orderBy'
import sort from './../reducers/sort'

const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case 'all':
            return orderBy(books, 'rating', 'asc');
        case 'popular' :
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
};

const mapStateToProps = ({ books }) => ({
    books: sortBy(books.items, sort.filterBy),
    isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);