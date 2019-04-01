import {Component} from "angular2/core";
import {ShoppingListComponent} from './shopping-item.component';

@Component({
    selector: 'my-app',
    template: `
    <shopping></shopping>
    `,
    directives: [ShoppingListComponent]
})

export class AppComponent {

}