'use strict';

angular.
    module('atrealAngular').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {

            $routeProvider.
                when('/', {
                    template: '<game-config></game-config>'
                }).
                when('/game', {
                    template: '<current-game></current-game>'
                }).
                otherwise('/');
        }
    ]);
