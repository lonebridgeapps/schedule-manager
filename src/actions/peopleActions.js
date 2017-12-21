import * as types from './actionTypes';

export function createPerson(person){
    return {type: types.CREATE_PERSON, person}
}