System.register(['@angular/core', '@angular/forms'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                // form builder simplify form initialization
                function AppComponent(_fb) {
                    this._fb = _fb;
                    this.events = []; // use later to display form changes
                }
                AppComponent.prototype.subcribeToFormChanges = function () {
                    var _this = this;
                    // initialize stream
                    var myFormValueChanges$ = this.myForm.valueChanges;
                    // subscribe to the stream
                    myFormValueChanges$.subscribe(function (x) { return _this.events
                        .push({ event: 'STATUS CHANGED', object: x }); });
                };
                AppComponent.prototype.ngOnInit = function () {
                    // we will initialize our form model here
                    this.myForm = new forms_1.FormGroup({
                        name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
                        address: new forms_1.FormGroup({
                            street: new forms_1.FormControl('', forms_1.Validators.required),
                            postcode: new forms_1.FormControl('8000')
                        })
                    });
                    this.subcribeToFormChanges();
                };
                AppComponent.prototype.save = function (model, isValid) {
                    this.submitted = true; // set form submit to true
                    // check if model is valid
                    // if valid, call API to save customer
                    console.log(model, isValid);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        moduleId: modile.id,
                        selector: 'my-app,',
                        templateUrl: 'app.component.html'
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map