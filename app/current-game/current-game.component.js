'use strict';

angular.
    module('currentGame')
    .component('currentGame', {
        templateUrl: 'current-game/current-game.template.html',
        controllerAs: "gameManager",
        controller: ["Game", function(game) {
            this.game = game;
            console.log(game);
        }]
    });
