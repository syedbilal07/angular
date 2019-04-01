import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

import {User} from './user.interface';

@Component({
    moduleId: modile.id,
    selector: 'my-app,',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInt{
    public myForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes

    // form builder simplify form initialization
    constructor(private _fb : FormBuilder){ }
    subcribeToFormChanges(){
        // initialize stream
        const myFormValueChanges$ = this.myForm.valueChanges;
        // subscribe to the stream
        myFormValueChanges$.subscribe(x => this.events
            .push({event: 'STATUS CHANGED', object: x}))

    }
    ngOnInit(){
        // we will initialize our form model here
        this.myForm = new FormGroup({
            name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            address: new FormGroup({
                street: new FormControl('', <any>Validators.required),
                postcode: new FormControl('8000')
            })
        });
        this.subcribeToFormChanges();
    }

    save(model: User, isValid: boolean){
        this.submitted = true; // set form submit to true

        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    }
}