Ext.define('FeedReader.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',

    getGreetings: function (){
        alert('hello!');
    }
});
