import storeApis from '../../apis/storeApis';
import { ActionTypes } from '../constants/actionTypes';

export const fetchCards = () => async (dispatch) => {
        const response = await storeApis.get("/posts");
        dispatch({type: ActionTypes.FETCH_CARDS, payload: response.data})
    }
    


export const setCards = (cards) => {
    return {
       type: ActionTypes.SET_CARDS,
       payload: cards
    }
}

export const selectedCard = (card) => {
    return {
       type: ActionTypes.SELECTED_CARD,
       payload: card
    }
}

export const removeSelectedCard = (card) => {
    return {
       type: ActionTypes.REMOVE_SELECTED_CARD,
       
    }
}