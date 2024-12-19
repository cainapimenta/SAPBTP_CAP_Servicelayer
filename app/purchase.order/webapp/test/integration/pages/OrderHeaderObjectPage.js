sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'treinamento.alfa.purchase.order',
            componentId: 'OrderHeaderObjectPage',
            contextPath: '/OrderHeader'
        },
        CustomPageDefinitions
    );
});