/**
 * Created by zhoujianhui on 6/5/2017.
 */
(function () {
    'use strict';

    angular
        .module('app.core')
        .config(config);

    config.$inject = ['localStorageServiceProvider'];

    /* @ngInject */
    function config(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('app')
            .setStorageType('sessionStorage')
            .setNotify(true, true);
    }
})();