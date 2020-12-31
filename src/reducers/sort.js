const SET_SORT = "SET_SORT";
const SET_QUERY = "SET_QUERY";

const initialState = {
    searchQuery: '',
    filterBy: 'all',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            };
        case SET_SORT:
            return {
                ...state,
                filterBy: action.payload,
            };
        default:
            return state;
    }
};