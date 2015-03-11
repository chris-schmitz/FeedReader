Ext.define('FeedReader.view.west.West',{
    extend: 'Ext.panel.Panel',
    requires:[
        'FeedReader.view.west.WestModel',
        'FeedReader.view.west.WestController'
    ],

    // Good to know:
    //  if you don't specify a controller but the view is a child of another view 
    //  that DOES have a controller, the child view will inherit the parent's controller
    //  **even if there is a controller class created for the child view**. I created the
    //  `WestController` class, put it in the same subfolder, but until I referenced it
    //  in the line below, the view was still using the main controller and it's methods.
    controller: 'west',
    xtype: 'region-west',

    region: 'west',
    viewModel: {
        type: 'west'
    },
    bind: {
        title: '{name}'
    },
    width: 250,
    split: true,
    collapsible: true,
    html: '<ul><li>line item</li></ul>',
    tbar: [
        {
            text: 'Greetings',
            handler: 'onClickButton'
        }
    ]
});