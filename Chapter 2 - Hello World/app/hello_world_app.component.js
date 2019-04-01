var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};System.register(['angular2/core'], function(exports_1) {
    var core_1;
    var MyHelloWorld;
    return {
        setters:[
            function (_core_1) {
                core_1 = _core_1;
            }],
        execute: function() {
            MyHelloWorld = (function () {
                function MyHelloWorld() {
                }
                MyHelloWorld = __decorate([
                    core_1.Component({
                        selector: 'my-app'
                    }),
                    core_1.View({
                        template: '<h2>Hello World !!</h2>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyHelloWorld);
                return MyHelloWorld;
            })();
            exports_1("MyHelloWorld", MyHelloWorld);
        }
    }
});
//# sourceMappingURL=hello_world_app.component.js.map