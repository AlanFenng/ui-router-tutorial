(function () {
    'use strict';
    angular.module('app',[
        'ui.router',
        'app.core',
        'app.home'
    ]).directive("usersTemplate",function () {
        
        return{
            restrict:'A',
            scope:{
                userModel:'=',
                disaplyModel:'='
            },
            replace:true,
            template:'<input ng-model="disaplyModel"/>',
            link:function (scope, element, attribute) {

                scope.userModel= attribute.disaplyModel;
            }
        }
    });
})();