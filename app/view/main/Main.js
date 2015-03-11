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
        'FeedReader.view.west.West'
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
        },{
            region: 'center',
            xtype: 'tabpanel',
            items:[{
                title: 'Posts',
                html: '<h2>This would be replaced with a list of article titles returned from the erver</h2>'
            },{
                title: 'Details',
                layout: 'fit',
                items: [
                    {
                        xtype: 'grid',
                        title: 'Simpsons', 
                        store:{
                            fields: ['name', 'email', 'phone'],
                            data:[
                                {
                                    name: 'Lisa', email: 'lisa@gmail.com', phone: '12345'
                                },
                                {
                                    name: 'Bart', email: 'bart@gmail.com', phone: '12345'
                                }
                            ],
                            proxy:{type: 'memory'} 
                        },
                        columns:[
                            {
                                text: 'Name',
                                dataIndex: 'name'
                            },
                            {
                                text: 'Email',
                                dataIndex: 'email',
                                flex: 1
                            },
                            {
                                text: 'Phone',
                                dataIndex: 'phone' 
                            }
                        ]
                    }
                ]
            }
            ]
    }
    ]
});
