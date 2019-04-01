System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.names = [
                        { name: "Kamal" },
                        { name: "Mitchel" },
                        { name: "Yoon" },
                        { name: "Johnson" },
                        { name: "Jet Li" }
                    ];
                    this.selectedName = { name: '' };
                }
                AppComponent.prototype.onNameClicked = function (nam) {
                    this.selectedName = nam;
                };
                AppComponent.prototype.onAddName = function (nam) {
                    this.names.push({ name: nam.value });
                };
                AppComponent.prototype.onDeleteName = function (nam) {
                    this.names.splice(this.names.indexOf(this.selectedName), 1);
                    this.selectedName.name = "";
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h2>{{title}}</h2>\n        <p class = \"alert alert-danger\" *ngIf = \"names.length > 2\">Currently There Are More Than 2 Names</p>\n        <p class = \"alert alert-danger\" *ngIf = \"names.length == 2\">Currently There Are 2 Names</p>\n        <p class = \"alert alert-danger\" *ngIf = \"names.length < 2\">Currently There Are Less Than 2 Names</p>\n        <ul>\n            <li *ngFor = \"#nam of names\" (click) = \"onNameClicked(nam)\">{{nam.name}}</li>\n        </ul>\n        <input type = \"text\" [(ngModel)] = \"selectedName.name\">\n        <button (click) = \"onDeleteName(nam)\">Delete Name</button><br><br>\n        <input type = \"text\" #nam>\n        <button (click) = \"onAddName(nam)\">Add Name</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=structural_app.component.js.map