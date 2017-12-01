import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CharacterSelectionModule} from './character-selection/character-selection.module';
import {AppRoutingModule} from './app-routing.module';
import {characterReducer} from './character-selection/character/character.reducer';
import {StoreModule} from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CharacterSelectionModule,
    StoreModule.forRoot({ characterReducer: characterReducer }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
