import {Component, Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {CharacterService} from './character/character.service';

@Component({
  selector: 'kg-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent implements OnInit {

  characters$: Observable<any>;

  constructor(private store: Store<any>, private characterService: CharacterService) { }

  ngOnInit() {
    this.characters$ = this.store.select('characterReducer');
    this.characters$.subscribe((something) => {
      console.log(something);
    });
    this.characterService.getAll();
  }

}
