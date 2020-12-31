import React from 'react';
import {bindActionCreators} from "redux";
import * as sortActions from './../actions/sort'
import {connect} from "react-redux";
import Sort from "../components/Sort";
import sort from "../reducers/sort";


const mapStateToProps = ({ books, filterBy }) => ({
    filterBy: sort.filterBy,
})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(sortActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Sort);