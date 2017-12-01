import {Component, Input, OnInit} from '@angular/core';
import {Character} from './character.model';

@Component({
  selector: 'kg-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input()
  character: Character;

  constructor() { }

  ngOnInit() {
  }

}
