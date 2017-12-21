import * as types from '../actions/actionTypes';

export default function peopleReducer(state =[], action){
    switch(action.type){
        case types.CREATE_PERSON:
            console.log('create person reducer called.');
            return [...state,
                Object.assign({}, action.person)
            ];

        default:
            return state;
    }
}