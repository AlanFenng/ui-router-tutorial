(function () {
    'use strict';
    angular
        .module('app.home')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state({
                name: 'home',
                url: '/',
                views: {
                    '@': {
                        templateUrl: 'home/views/home.html',
                        controller: 'homeController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    loadDependencies: loadHomeDependencies
                }
            })
    }

    loadHomeDependencies.$inject = ['$ocLazyLoad'];

    function loadHomeDependencies($ocLazyLoad) {
        return $ocLazyLoad.load([
            'home/controllers/home.controller.js'
        ]);
    }
})();