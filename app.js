Ext.application({
    name: "MyApp",
    appFolder: 'app',
    controllers: ["UserController","SmsOutController"],
    autoCreateViewport:true,
    launch: function () {
//        Ext.create('MyApp.view.Main');
    }
});