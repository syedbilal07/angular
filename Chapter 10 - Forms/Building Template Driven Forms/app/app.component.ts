import {Component, OnInit} from '@angular/core';
import {User} from './user.interface';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
    public user: User; // our model

    ngOnInit(){
        // we will initialize our model here
        // Now, let's initialize our user model.
        this.user = {
            name: '',
            address: {
                street: '',
                postcode: '8000' // set default value to 8000
            }
        };
    }

    save(model: user, isValid: boolean){
        // check if model is valid
        // if valid, call API to save customer
        console.log(user, isValid);
    }
}