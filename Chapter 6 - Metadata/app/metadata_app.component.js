System.register(["angular2/core", "./item-list.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, item_list_component_1, MyTemplate;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_list_component_1_1) {
                item_list_component_1 = item_list_component_1_1;
            }
        ],
        execute: function () {
            MyTemplate = /** @class */ (function () {
                function MyTemplate() {
                }
                MyTemplate = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<my-list></my-list>',
                        directives: [item_list_component_1.ItemComponent]
                    })
                ], MyTemplate);
                return MyTemplate;
            }());
            exports_1("MyTemplate", MyTemplate);
        }
    };
});
//# sourceMappingURL=metadata_app.component.js.map