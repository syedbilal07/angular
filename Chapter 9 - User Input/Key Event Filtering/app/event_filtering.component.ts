import {Component} from 'angular2/core';

@Component({
    selector: 'event-filtering',
    template: `
        <input #myval (keyup.enter) = "values = myval.value">
        <p>{{values}}</p>
    `
})

export class EventFilteringComponent {

}