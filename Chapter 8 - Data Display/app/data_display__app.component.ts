import {Component, View} from "angular2/core";

@Component({
    selector: 'my-app'
})

@View({
    template: `
	<h2>Showing Data Using Component Properties With Interpolation</h2>
	<h3>Player Name: {{player}}</h3>
	<h3>He Is Famous In: {{sport}}</h3>
	<h3>Showing Data Using Contructor Or Variable Initilization</h3>
	<h3>Pakistan's Capital Is: {{capital}}</h3>
	<h3>Showing Data Using Array Property With ngFor</h3>
	<h3>My Favourite Fruit Is : {{myfruit}}</h3>
	<p>List Of Fruits</p>
	<ul>
		<li *ngFor = "#fruit of fruits">
			{{fruit}}
		</li>
	</ul>
	`
})

export class AppComponent {
	player: 'Lionel Messi';
	sport: 'Football';
	capital: string;
	constructor(){
		this.capital = 'Islamabad';
	}
fruits = ['Apple','Orange','Mango','Grapes'];
	myfruit = this.fruits[2];
}