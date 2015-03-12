Ext.define('FeedReader.view.center.Center', {
    extend: 'Ext.tab.Panel',
    xtype: 'region-center',

    region: 'center',
    items:[
        {
            title: 'Posts',
            html: '<h2>This would be replaced with a list of feed names</h2>'
        },
        {
            title: "Article", 
            layout: "fit",
            items:[
                {
                    xtype: 'grid',
                    title: 'Simpsons',
                    store: {
                        fields: ['name', 'email', 'phone', 'age'],
                        data:[
                            {name: 'Lisa', email: 'lisa@gmail.com', age: '15', phone: '313131'},
                            {name: 'Bart', email: 'bart@gmail.com', age: '12', phone:'12345'}
                        ],
                        proxy: {type: 'memory'}
                    },
                    columns:[
                        {
                            text: 'Name',
                            dataIndex: 'name'
                        },
                        {
                            text: 'Age',
                            dataIndex: 'age'
                        },
                        {
                            text: 'Email Address',
                            flex:2,
                            dataIndex: 'email'
                        },
                        {
                            text: 'Phone Number',
                            dataIndex: 'phone'
                        }
                    ]
                }
            ]
        }
    ]

});

/*
        {
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

*/