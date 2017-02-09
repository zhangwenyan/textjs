Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [],
    layout: 'border',
    items: [],
    listeners:{
        'render':function(port){
            //左侧菜单
            port.add({
                region:'west',
                width: 200,
                border:false,
                layout:'fit',
                xtype:'ViewMainHandleList',
                store:ExtDash.MainHandleStore
            });


            //中间部分
            port.add({
                region: 'center',
                xtype: 'tabpanel',
                id: 'MainTabPanel',
                margin:'0 0 -1 0',
                layout:'fit',
                items:[
                    Ext.widget('panel',{
                        title:'欢迎',
                        bodyPadding:10,
                        border:false,
                        html:'<h3>请点击左侧的菜单进行各项操作.</h3>'
                    })
                ]
            });

            //上方部分
            port.add({
                region: 'north',
                xtype: 'panel',
                border:false,
                dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype:'tbtext',
                            text:'欢迎使用ExtDash管理后台 !'
                        },
                        '->',
                        "欢迎您，管理员",
                        '-',
                        {
                            xtype:'toolbar',
                            border:false,
                            padding:0,
                            items:[
                                {
                                    text: '修改密码',
                                    scale:'medium',
                                    handler:function(btn){
                                        Ext.Msg.alert('提示','欢迎使用ExtDash');
                                    }
                                },
                                {
                                    text: '退出登录',
                                    scale:'medium',
                                    handler:function(btn){
                                        Ext.Msg.alert('提示','欢迎使用ExtDash');
                                    }
                                }
                            ]
                        }
                    ]
                }]
            });

            //下方
         /*   port.add({
                region:'south',
                xtype:'toolbar',
                height:30,
                items:[
                    '->',
                    {
                        xtype:'tbtext',
                        text:"<a target='_blank' href='http://www.appx.top'>www.appx.top</a>"
                    },
                    '->'
                ]
            });*/
        }
    }
});



/**
 *	左侧操作菜单
 */
Ext.define('ExtDash.view.MainHandleList', {
    extend: 'Ext.tree.Panel',
    xtype:'ViewMainHandleList',
    collapsible:true,
    rootVisible:false,
    listeners:{
        render:function(panel){
            var store = panel.getStore();
            panel.setTitle("功能菜单");

        },
        itemclick: function(t, record, item, index, e, eOpts){
            var id = "tabpanel_"+record.id,
                isLeaf = record.data.leaf,
                type = record.data.xtype;

            if(!isLeaf){
                return ;
            };

            main_tab = Ext.getCmp('MainTabPanel'),
                items = main_tab.items.items,
                activeIndex = 0;

            if(!type){
                Ext.Msg.alert('提示','你还没有定义xtype属性');
                return;
            }
            if(!main_tab.queryById(id))
            {
                var tab = main_tab.add({
                    xtype: type,
                    title: record.data.text,
                    itemId: id,
                    id: id,
                    closable: true
                });
            }
            main_tab.setActiveItem(id);
        }
    }
});

Ext.define('ExtDash.data.MainHandleModel',{
    extend:'Ext.data.TreeModel'
});

ExtDash.MainHandleStore = Ext.create('Ext.data.TreeStore',{
    model:'ExtDash.data.MainHandleModel',
    data:[
        {
            id:1,
            text:'测试面板',
            xtype:'ExtDashTestPanel',
            leaf:true
        },{
            id:2,
            text:"用户管理",
            xtype:"userlist",
            leaf:true
        },{
            id:3,
            text:"待发短信",
            xtype:"smsOutList",
            leaf:true
        }
    ],
    proxy:{
        type:'memory',
        reader:{
            type:'json'
        }
    }
});

Ext.define('ExtDash.view.TestPanel',{
    extend:'Ext.panel.Panel',
    xtype:'ExtDashTestPanel',
    bodyPadding:10,
    html:'你好,世界!'
});
