import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterSelectionComponent} from './character-selection.component';

const routes: Routes = [
  { path: 'character-selection', component: CharacterSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterSelectionRoutingModule { }
