import {Component, View} from "angular2/core";

@Component({
    selector: 'my-app'
})

@View({
    template: '<h2>Welcome To {{val}}</h2>'
})

export class MyTemplate{
    val: 'Angular 2'
}