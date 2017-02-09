/**
 * @name ExtDash
 * @version 1.0.0
 * @intro a dashboard component based on ExtJS 5
 * @author crazymus < QQ:291445576 >
 * @licenced Apache 2.0
 * @updated 2015-08-24
 */

var ExtDash = {};
ExtDash.init = function(obj){
	this.appName = 'MyApp';
	this.appFolder = 'app';
	
	this.menus = [
		{
			text:'测试面板',
			xtype:'ExtDashTestPanel',
			leaf:true
		}
	];
	this.menuTitle = '功能菜单';
	
	this.controllers = [];
	this.models = [];
	this.stores = [];
	this.views = [];
	
	this.logo = {
		xtype:'tbtext',
		text:'欢迎使用ExtDash管理后台 !'
	};
	this.centerRegion = Ext.widget('panel',{
		title:'欢迎',
		bodyPadding:10,
		border:false,
		html:'<h3>请点击左侧的菜单进行各项操作.</h3>'
	});
	
	this.copyright = " All Rights Reserved. Powered By ExtDash ";
	this.userInfo = '欢迎你, 管理员';
	
	this.controls = [
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
	];
	
	for(var key in obj){
		this[key] = obj[key];
	}

	ExtDash.MainHandleStore = Ext.create('Ext.data.TreeStore',{
		model:'ExtDash.data.MainHandleModel',
		data:this.menus,
		proxy:{
			type:'memory',
			reader:{
				type:'json'
			}
		}
	}); 

	Ext.application({
		name:this.appName,
		appFolder:this.appFolder,
		controllers:ExtDash.controllers,
		models:ExtDash.models,
		stores:ExtDash.stores,
		views:ExtDash.views,
		launch: function() {
		   Ext.create('ExtDash.view.Main');
		}
	});

}
 
Ext.define('ExtDash.view.Main', {
    extend: 'Ext.container.Viewport',
    layout: {
        type:'border'
    },
    listeners:{
        'render':function(port){
            port.add({
                region:'west',
                width: 200,
                border:false,
                layout:'fit',
                xtype:'ExtDashViewMainHandleList',
                store:ExtDash.MainHandleStore
            });

            port.add({
                region: 'center',
                xtype: 'tabpanel',
                id: 'ExtDashMainTabPanel',
                margin:'0 0 -1 0',
                layout:'fit',
                items:[
                    ExtDash.centerRegion
                ]
            });

            port.add({
                region: 'north',
                xtype: 'panel',
                border:false,
                dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        ExtDash.logo,
                        '->',
                        ExtDash.userInfo,
                        '-',
                        {
                            xtype:'toolbar',
                            border:false,
                            padding:0,
                            items:ExtDash.controls
                        }
                    ]
                }]
            });

            port.add({
                region:'south',
                xtype:'toolbar',
                height:30,
                items:[
                    '->',
                    {
                        xtype:'tbtext',
                        text:ExtDash.copyright
                    },
                    '->'
                ]
            });
        }
    }
});


Ext.define('ExtDash.data.MainHandleModel',{
	extend:'Ext.data.TreeModel'
});
 

/**
*	左侧操作菜单
*/
Ext.define('ExtDash.view.MainHandleList', {
    extend: 'Ext.tree.Panel',
	xtype:'ExtDashViewMainHandleList',
	collapsible:true,
	rootVisible:false,
	listeners:{
		render:function(panel){
			var store = panel.getStore();
			panel.setTitle(ExtDash.menuTitle);
		},
		itemclick: function(t, record, item, index, e, eOpts){
			var id = record.id,
				isLeaf = record.data.leaf,
				type = record.data.xtype;

			if(!isLeaf){
				return ;
			};
			
			var main_tab = Ext.getCmp('ExtDashMainTabPanel'),
				items = main_tab.items.items,
				activeIndex = 0;
				
			if(!type){
				Ext.Msg.alert('提示','你还没有定义xtype属性');
				return;
			}
				
			if(!main_tab.queryById(id))
			{
				main_tab.add({
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

Ext.define('ExtDash.view.TestPanel',{
	extend:'Ext.panel.Panel',
	xtype:'ExtDashTestPanel',
	bodyPadding:10,
	html:'你好,世界!'
});
