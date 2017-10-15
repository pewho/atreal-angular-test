'use strict';

angular.
    module('core.game').
    factory('Game', function() {
        var game = {
            mode: '',
            gamers: []
        };
        return game;
    });
