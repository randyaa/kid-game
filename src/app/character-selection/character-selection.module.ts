import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterSelectionRoutingModule } from './character-selection-routing.module';
import {CharacterSelectionComponent} from "./character-selection.component";
import {MatButtonModule, MatCardModule} from "@angular/material";
import { CharacterComponent } from './character/character.component';
import {CharacterService} from "./character/character.service";

@NgModule({
  imports: [
    CommonModule,
    CharacterSelectionRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [CharacterSelectionComponent, CharacterComponent],
  providers: [CharacterService]
})
export class CharacterSelectionModule { }
