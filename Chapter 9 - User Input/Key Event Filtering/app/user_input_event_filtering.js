System.register(["angular2/platform/browser", "./event_filtering.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, event_filtering_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (event_filtering_component_1_1) {
                event_filtering_component_1 = event_filtering_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(event_filtering_component_1.EventFilteringComponent);
        }
    }
});
//# sourceMappingURL=user_input_event_filtering.js.map