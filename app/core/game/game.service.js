'use strict';

angular.
    module('core.game').
    factory('Game', function() {
        var game = {
            mode: '',
            gamers: [],
            resetGame: function() {
                this.mode = '';
                this.gamers = [];
            }
        };
        return game;
    });
