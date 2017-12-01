import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {ADD_CHARACTER} from './character.reducer';

@Injectable()
export class CharacterService {
  constructor(private store: Store<any>) {}
  getAll() {
    this.store.dispatch({ type: ADD_CHARACTER, payload: { name: 'Fred', done: false } });
    // this.store.dispatch({ type: ADD_CHARACTER, payload: { name: 'Sam', done: false } });
  }
}
