import * as actionTypes from "./actionTypes";

export const updateItem = item => {
    return {
        type: actionTypes.ON_UPDATE_ITEM,
        item
    }
}


export const deleteItem = itemId => {
    return {
        type: actionTypes.ON_DELETE_ITEM,
        itemId
    }
}

export const setCurrentItem = item => {
    return {
        type: actionTypes.ON_SET_CURRENT_ITEM,
        item
    }
}