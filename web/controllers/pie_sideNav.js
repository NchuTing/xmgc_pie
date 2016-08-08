(function() {
    'use strict';
    var thisName = 'pie_sideNav';

    _app.controller(thisName, thisFn);

    function thisFn(
        $rootScope,
        $scope,
        $location,
        $anchorScroll,
        $element,
        $mdToast,
        $mdDialog,
        $mdMedia
    ) {
        console.log(thisName + '.js is loading...');
        _fns.initCtrlr($scope, $element, thisName, false);

        $rootScope[thisName] = $scope;

        $scope.menus = [{
            name: 'Web前端开发指南',
            icon: 'fa fa-code',
            ctrlr: 'doc_devWeb',
        }, {
            name: '服务器开发指南',
            icon: 'fa fa-cloud',
            ctrlr: 'doc_devSvr',
        }, {
            name: '所有模块API接口',
            icon: 'fa fa-plug',
            ctrlr: 'doc_api',
        }]

        $(window).ready(function() {
            setTimeout(function() {
                console.log('>>>', $rootScope.lastCtrlr);
            },1000)
        });

        $scope.name = thisName;
    }
})();
