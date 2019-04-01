System.register(["angular2/platform/browser", "./user_input_app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, user_input_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (user_input_app_component_1_1) {
                user_input_app_component_1 = user_input_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(user_input_app_component_1.AppComponent);
        }
    }
});
//# sourceMappingURL=user_input_main.js.map