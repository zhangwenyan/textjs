Ext.define("MyApp.view.sms.SmsOutList", {
    extend: "Ext.grid.Panel",
    alias: 'widget.smsOutList',
    store: "SmsOutStore",
    tbar:[
        {
            text:'添加',
            icon:"icon/edit_add.png",
            handler:function(){
                var win = Ext.create("MyApp.view.sms.SmsOutAdd");
                win.show();
            }
        },{
            text:"修改",
            icon:"icon/pencil.png"

        },{
            text:"删除",
            icon:"icon/edit_remove.png",
            handler:function () {
                alert("修改")
            }
        },{
            text:"刷新",
            icon:"icon/reload.png"
        }
    ],
    initComponent: function () {
        this.columns = [
            { text: '手机号11', dataIndex: 'mbno',flex:100 },
            { text: '内容', dataIndex: 'msg',flex:300 },
            { text: '发送时间', dataIndex: 'sendTime',flex:100 },
        ];
        this.callParent(arguments);
    },
    bbar: {
        xtype: "pagingtoolbar",
        bind: {
            store: "{SmsOutStore}"
        },
        displayInfo: true
    },
});