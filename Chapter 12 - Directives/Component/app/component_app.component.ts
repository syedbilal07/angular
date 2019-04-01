import {Component, View} from "angular2/core";

@Component({
    selector: 'my-app'
})

@View({
    template: '<h2>Welcome To {{name}}</h2>'
})

export class AppComponent {
    name: 'Angular 2'
}