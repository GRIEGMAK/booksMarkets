import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'
import rootReducer from './reducers'

export default () => {
    const middleware = applyMiddleware(logger)
    const store = createStore(rootReducer, middleware)
    return store;
};