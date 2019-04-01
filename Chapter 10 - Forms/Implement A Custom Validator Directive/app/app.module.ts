import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {EqualValidator} from './equal-validator.directive';

@NgModule({
    declarations: [AppComponent, EqualValidator],
    imports: [BrowserModule, FormsModule], // import forms module here
    bootstrap: [AppComponent]
})

export class AppModule { }