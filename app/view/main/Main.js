/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FeedReader.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'FeedReader.view.main.MainController',
        'FeedReader.view.north.North',
        'FeedReader.view.west.West',
        'FeedReader.view.center.Center'
    ],
    xtype: 'app-main',
    
    controller: 'main',
    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'region-north'
        },
        {
            xtype: 'region-west'
        },
        {
            xtype: 'region-center'
        }
    ]
});
