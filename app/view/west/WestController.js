Ext.define('FeedReader.view.west.WestController', {
    extend: 'Ext.app.ViewController',
    //Think of this as the same as php's `require` or psr-4's `use`
    requires:[
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.west',

    onClickButton: function (){
        console.log('got to onClickButton');
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    
    onConfirm: function (choice){
        if ( choice === 'yes' ){ 
            console.log('The yes button was clicked');
        } else {
            console.log('The ' + choice + ' button was clicked');
        }
    }
});
