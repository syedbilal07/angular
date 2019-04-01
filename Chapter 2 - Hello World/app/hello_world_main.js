System.register(["angular2/platform/browser", "./hello_world_app.component"], function(exports_1) {
    var browser_1, hello_world_app_component_1;
    return {
        setters:[
            function (_browser_1) {
                browser_1 = _browser_1;
            },
            function (_hello_world_app_component_1) {
                hello_world_app_component_1 = _hello_world_app_component_1;
            }],
        execute: function() {
            browser_1.bootstrap(hello_world_app_component_1.MyHelloWorld);
        }
    }
});
//# sourceMappingURL=hello_world_main.js.map