System.register(['angular2/core'], function(exports_1, context_1) {
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
    var LoopBackEventComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoopBackEventComponent = (function () {
                function LoopBackEventComponent() {
                }
                LoopBackEventComponent = __decorate([
                    core_1.Component({
                        selector: 'loop-back-event',
                        template: "\n        <h2>Get User Input From Local Template Variable</h2>\n        \n        <!--declare a local template variable by preceding an identifier with a hash character (#)-->\n        <input #key_val (keyup) = \"0\">\n        <!-- The key_val variable is a reference to the <input> element itself, and grab the input \n             element's value and display it with interpolation between <p> tags -->\n        <p>{{key_val.value}}</p>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoopBackEventComponent);
                return LoopBackEventComponent;
            }());
            exports_1("LoopBackEventComponent", LoopBackEventComponent);
        }
    }
});
//# sourceMappingURL=loop_back.component.js.map