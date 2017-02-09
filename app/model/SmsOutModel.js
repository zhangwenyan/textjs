Ext.define('MyApp.model.SmsOutModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'username', type: 'string' },
        { name: 'mbno', type: 'string' },
        { name: 'msg', type: 'string' },
        { name: 'sendTime', type: 'string' },
    ]
});