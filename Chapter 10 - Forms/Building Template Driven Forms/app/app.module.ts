import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

@Component({
    imports: [BrowserModule, FormsModule], // import forms module here
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }