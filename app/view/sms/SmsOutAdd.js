
Ext.define("MyApp.view.sms.SmsOutAdd", {
    extend: "Ext.window.Window",
    xtype: "smsoutadd",
    title: "添加短信",
    width: 400,
    height: 250,
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
                name:"mbno",
                fieldLabel:"手机号"
            },{
                xtype:"textarea",
                name:"msg",
                fieldLabel:"内容"
            }
            ]
        }]
    }],
    buttons: [{
        text: "确认",
        icon:"icon/ok.png",
        handler: function(btn){

        }
    }, {
        text: "取消",
        icon:"icon/cancel.png",
        handler:function(btn){
            btn.up("window").close();
        }
    }]
});
