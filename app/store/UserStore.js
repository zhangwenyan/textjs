Ext.define("MyApp.store.UserStore", {
    extend: "Ext.data.Store",
    model: "MyApp.model.UserModel",
    data: [
        { name: "Tom", age: 5, phone: "123456" },
        { name: "Jerry", age: 3, phone: "654321" }
    ]
});