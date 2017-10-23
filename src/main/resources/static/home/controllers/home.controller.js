/**
 * Created by zhoujianhui on 6/1/2017.
 */
(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope', '$state', 'localStorageService'];

    function homeController($scope, $state, localStorageService) {
        var vm = this;
        vm.user={};
        vm.user.name="alan";
        vm.chinaName="冯享享";
        vm.save=function () {
            alert("vm.user.name"+vm.user.name+"-----"+"vm.chinaName"+vm.chinaName);
        }
    }

})();

