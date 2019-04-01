import {Component, View} from "angular2/core";

//framework recognizes @Component annotation and knows that we are trying to create a new component
@Component({
    selector: 'my-app'
})

@View({
    //this template value will be displayed in the browser
    template: '<h2>Welcome Angular 2</h2>'
})

export class MyModulesClass{

}