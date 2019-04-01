import {Component} from "angular2/core";
import {MyListComponent} from './play-component';

//@Component is a decorator that uses configuration object to create the component and its view.
@Component({
    selector: 'my-app', //The selector creates an instance of the component where it finds 'my-app' tag in parent HTML
    template: '<my-list></my-list>',
    directives: [MyListComponent] //'MyListComponent' is the root component of fruits that governs child components
})

export class AppComponent {

}