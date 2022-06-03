
import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    cards: []
}

export const cardReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_CARDS:
            return {...state, cards: payload}
        case ActionTypes.FETCH_CARDS:
            return {...state, cards: payload}
        default:
            return state
    }
}

export const selectedCardReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_CARD:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_CARD:
                return {}
        default:
            return state
    }
}