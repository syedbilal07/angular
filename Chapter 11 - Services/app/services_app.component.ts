import {Component} from 'angular2/core';
import {MyListComponent} from './service-list.component';

@Component({
    selector: 'my-app',
    template: `<country-list></country-list>`,
    directives: [MyListComponent]
})

export class AppComponent {}