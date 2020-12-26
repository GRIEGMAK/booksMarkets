const ADD_BOOK_TO_CART = "ADD_BOOK_TO_CART";
const REMOVE_BOOK_FROM_CART = "REMOVE_BOOK_FROM_CART";

const initialState = {
    items: [],
};

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_BOOK_TO_CART:
            return{
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ],
                isLoading: false
            };
        case REMOVE_BOOK_FROM_CART:
            return{
                ...state,
                items: state.items.filter(c => c.id !== action.payload)
            };
        default:
            return state;
    }
}
