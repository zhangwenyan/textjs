Ext.define("MyApp.view.user.UserList", {
    extend: "Ext.grid.Panel",
    alias: 'widget.userlist',
    store: "UserStore",
    tbar:[{
        text:"添加",
        icon:"icon/edit_add.png",
        handler:function(){
            var win = Ext.create("MyApp.view.user.UserAdd");
            win.show();
        }
    }],
    initComponent: function () {
        this.columns = [
            { text: '姓名', dataIndex: 'name' },
            { text: '年龄', dataIndex: 'age', xtype: 'numbercolumn', format: '0' },
            { text: '电话', dataIndex: 'phone',flex:1 }
        ];
        this.callParent(arguments);
    }
});