import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {CountryService} from './country.service';
import {Contact} from './country.';

@Component({
    selector: '<country-list></country-list>',
    template: `
        <h2>List Of Countries</h2>
        <ul>
            <li *ngFor = "#coun of countries">{{coun.name}}</li>
        </ul>
    `,
    providers: [CountryService]
})

export class MyListComponent implements OnInit{
    public countries : Country[];
    constructor(private _countryService : CountryService) {}

    getContacts(){
        this._countryService.getContacts().then((countries: Country[]) => this.countries = countries)
    }

    ngOnInit():any{
        this.getContacts();
    }
}

