import {Injectable} from 'angular2/core';
import {COUNTRIES} from './fruits.lists';

//It is used for meta data generation and specifies that class is available to an
// injector for instantiation
@Injectable()

//'FruitService' exposes 'getContacts()' method that returns list of data
export class FruitService{
    getContacts(){
        return Promise.resolve(COUNTRIES); // takes values from fruits.lists.ts file
    }
}
