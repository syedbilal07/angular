import {Component} from "angular2/core";

@Component({
    selector: 'my-app',
    template: `
        <h2>{{title}}</h2>
        <p class = "alert alert-danger" *ngIf = "names.length > 2">Currently There Are More Than 2 Names</p>
        <p class = "alert alert-danger" *ngIf = "names.length == 2">Currently There Are 2 Names</p>
        <p class = "alert alert-danger" *ngIf = "names.length < 2">Currently There Are Less Than 2 Names</p>
        <ul>
            <li *ngFor = "#nam of names" (click) = "onNameClicked(nam)">{{nam.name}}</li>
        </ul>
        <input type = "text" [(ngModel)] = "selectedName.name">
        <button (click) = "onDeleteName(nam)">Delete Name</button><br><br>
        <input type = "text" #nam>
        <button (click) = "onAddName(nam)">Add Name</button>
    `
})

export class AppComponent {
    title: 'Structural Directives';

    public names = [
        { name: "Kamal"},
        { name: "Mitchel"},
        { name: "Yoon"},
        { name: "Johnson"},
        { name: "Jet Li"}
    ];

    public selectedName = {name: ''};

    onNameClicked(nam){
        this.selectedName = nam;
    }

    onAddName(nam){
        this.names.push({name: nam.value})
    }

    onDeleteName(nam){
        this.names.splice(this.names.indexOf(this.selectedName), 1);
        this.selectedName.name = "";
    }

}