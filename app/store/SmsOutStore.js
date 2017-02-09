Ext.define("MyApp.store.SmsOutStore", {
    extend: "Ext.data.Store",
    model: "MyApp.model.SmsOutModel",
    data: [
        { mbno: "17681109309", msg:"你好呀",sendTime:"2017/1/20 19:30" },
        { mbno: "18297982055", msg:"啦啦啦",sendTime:"2017/1/20 19:35" },
        { mbno: "10010", msg:"abcedf",sendTime:"2017/1/20 19:40" }
    ]
});