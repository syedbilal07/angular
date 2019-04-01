System.register(["angular2/core", "./fruits.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, fruits_service_1, MyListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fruits_service_1_1) {
                fruits_service_1 = fruits_service_1_1;
            }
        ],
        execute: function () {
            MyListComponent = /** @class */ (function () {
                //Using constructor, call the _fruitService and populate the fruits list
                function MyListComponent(_fruitService) {
                    this._fruitService = _fruitService;
                }
                ;
                MyListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._fruitService.getContacts().then(function (fruits) { return _this.fruits = fruits; });
                };
                //The 'ngOnInit()' hook is called when done with creating the component
                // and evaluated the inputs
                MyListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                MyListComponent = __decorate([
                    core_1.Component({
                        selector: '<my-list></my-list>',
                        template: "List Of Fruits <br>\n        <ul>    \n            <li *ngFor = \"#list of fruits\">\n                {{list.id}} = {{list.name}}\n            </li>\n        </ul>\n    ",
                        providers: [fruits_service_1.FruitService] //providers are part of @Component metadata
                    })
                    //The 'MyListComponent' should get list of fruits from the injected 'FruitService'
                    ,
                    __metadata("design:paramtypes", [fruits_service_1.FruitService])
                ], MyListComponent);
                return MyListComponent;
            }());
            exports_1("MyListComponent", MyListComponent);
        }
    };
});
//# sourceMappingURL=play-component.js.map