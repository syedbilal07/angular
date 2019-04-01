System.register(['angular2/core', './country.contacts'], function(exports_1, context_1) {
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
    var core_1, country_contacts_1;
    var CountryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (country_contacts_1_1) {
                country_contacts_1 = country_contacts_1_1;
            }],
        execute: function() {
            //@Injectable() specifies class is available to an injector for instantiation and an injector will display
            // an error when trying to instantiate a class that is not marked as @Injectable()
            CountryService = (function () {
                function CountryService() {
                }
                CountryService.prototype.getContacts = function () {
                    return Promise.resolve(country_contacts_1.COUNTRIES); // takes values from country.contacts typescript file
                };
                CountryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CountryService);
                return CountryService;
            }());
            exports_1("CountryService", CountryService);
        }
    }
});
//# sourceMappingURL=country.service.js.map