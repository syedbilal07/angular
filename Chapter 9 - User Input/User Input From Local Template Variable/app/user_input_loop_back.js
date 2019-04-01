System.register(["angular2/platform/browser", "./loop_back.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, loop_back_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (loop_back_component_1_1) {
                loop_back_component_1 = loop_back_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(loop_back_component_1.LoopBackEventComponent);
        }
    }
});
//# sourceMappingURL=user_input_loop_back.js.map