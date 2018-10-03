import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configreStore(initialState){
    return createStore(
        rootReducer,
        initialState
    );
}