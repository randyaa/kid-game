import { Action } from '@ngrx/store';
import {Character} from './character.model';

export const ADD_CHARACTER = 'ADD_CHARACTER';
// export const DELETE_CHARACTER = 'DELETE_CHARACTER';
// export const UPDATE_CHARACTER = 'UPDATE_CHARACTER';
// export const TOGGLE_DONE = 'TOGGLE_DONE';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export function characterReducer(state = [], action: ActionWithPayload<Character>) {
  switch (action.type) {
    case ADD_CHARACTER:
      return [action.payload, ...state];
    // case DELETE_CHARACTER:
    //   return state.filter((item, index) => index !== action.payload.index);
    // case UPDATE_CHARACTER:
    //   return state.map((item, index) => {
    //     return index === action.payload.index
    //       ? Object.assign({}, item, { value: action.payload.newValue })
    //       : item;
    //   });
    // case TOGGLE_DONE:
    //   return state.map((item, index) => {
    //     return index === action.payload.index
    //       ? Object.assign({}, item, { done: !action.payload.done })
    //       : item;
    //   });
    default:
      return state;
  }
}
