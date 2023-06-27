//there can be many reducers(for ex. Baby ke liye toy lane wala, ghumane wala, cloths change krne wala etc.) so we will combine all the reducers

import {combineReducers} from 'redux';
import amountReducer from './amountReducer';

const reducers=combineReducers({
    amount:amountReducer
})

export default reducers;