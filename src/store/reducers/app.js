import * as actionTypes from '../actions/actionTypes';

const initialState = {
    // showViewDetails: false,
    items: [
        {src: "sample.jpg", id: 0, title: "The Sample", name: "sample"},
        {src: "paris-preview.jpg", id: 1, title: "Eiffel", name: "paris-preview"},
        {src: "sample-parrot.jpg", id: 2, title: "The Bird", name: "sample-parrot"},
        {src: "flower-image.jpg", id: 3, title: "flower", name: "flower-image"},
        {src: "apples.jpg", id: 4, title: "apple", name: "apples"}
    ],
    currentItem: {}
}

const updateItem = (state, {item}) => {
    const items = state.items.map(el => el.id === item.id ? {...item} : el);
    return {...state, items, currentItem: item};
}

const deleteItem = (state, {itemId}) => {
    const items = state.items.filter(el => el.id !== itemId);
    return {...state, items, showViewDetails: false, currentItem: {}};
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ON_UPDATE_ITEM: return updateItem(state, action);
        case actionTypes.ON_SET_CURRENT_ITEM: return {...state, currentItem: action.item};
        case actionTypes.ON_DELETE_ITEM: return deleteItem(state, action);
        default:
            return state;
    }
};

export default reducer;