import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    InitialComponent
  ],
  bootstrap: [ InitialComponent ]
})
export class InitialComponent { }
