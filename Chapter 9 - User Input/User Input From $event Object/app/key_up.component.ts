import {Component} from "angular2/core";

@Component({
    selector: 'my-key',
    template: `
        <h2>Key Up Event Example</h2>
        <input (keyup) = "onKey($event)">
        <p>{{val}}</p>
    `
})

export class KeyUpComponent {
    val = '';
    onKey(event: KeyboardEvent){
        this.val += (event.target).value + ' | '
    }
}