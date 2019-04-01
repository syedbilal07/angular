System.register(["angular2/platform/browser", "./attribute_app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, attribute_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (attribute_app_component_1_1) {
                attribute_app_component_1 = attribute_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(attribute_app_component_1.AppComponent);
        }
    }
});
//# sourceMappingURL=attribute_main.js.map