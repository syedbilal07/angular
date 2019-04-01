System.register(["angular2/platform/browser", "./structural_app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, structural_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (structural_app_component_1_1) {
                structural_app_component_1 = structural_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(structural_app_component_1.AppComponent);
        }
    }
});
//# sourceMappingURL=structural_main.js.map