// component's metadata can be accessed using this primary Angular library
import {Component, View} from 'angular2/core';

//framework recognizes @Component annotation and knows that we are trying to create a new component
@Component({
    selector: 'my-app'
})

@View({
    //template property holds component's companion template that tells Angular how to render a view
    template: '<h2>Welcome Angular 2</h2>'
})

export class App {}

