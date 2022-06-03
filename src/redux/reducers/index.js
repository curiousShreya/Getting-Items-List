import { combineReducers } from 'redux';
import { cardReducer, selectedCardReducer } from './cardReducer';

export const reducers = combineReducers({
    allCards: cardReducer,
    card: selectedCardReducer
})