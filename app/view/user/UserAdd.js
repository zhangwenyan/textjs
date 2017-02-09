
Ext.define("MyApp.view.user.UserAdd", {
    extend: "Ext.window.Window",
    xtype: "useradd",
    title: "添加用户",
    width: 400,
    height: 250,
    icon:"icon/edit_add.png",
    resizable: false,
    constrain: true,
    modal: true,
    buttonAlign: "center",
    items:[{
        xtype:"form",
        margin:10,
        defaults:{
            anchor:"100%"
        },
        fieldDefaults:{
            flex:1,
            margin:10,
            labelWidth:60,
            allowBlank:false
        },
        items:[{
            xtype:"container",
            layout:{
                type:"vbox",
                align:"stretch"
            },
            items:[{
                xtype:"textfield",
                name:"username",
                fieldLabel:"用户名"
            },{
                xtype:"textfield",
                name:"password",
                fieldLabel:"密码"
            }
            ]
        }]
    }],
    buttons: [{
        text: "保存",
        icon:"icon/ok.png",
        handler: "save"
    }, {
        text: "取消",
        icon:"icon/cancel.png",
        handler:function(btn){
            btn.up("window").close();
        }
    }]
});
