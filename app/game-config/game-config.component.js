'use strict';

angular.module('gameConfig')
    .component('gameConfig', {
        templateUrl: "game-config/game-config.template.html",
        controllerAs: 'configGame',
        controller: ['Game', '$location', function(game, $location) {
            this.game = game;

            var newGamerName = null;
            this.hasGamers = function() {
                return this.game.gamers.length > 0;
            };

            this.addGamer = function() {
                if( this.newGamerName ) {
                    this.game.gamers.push({
                        name: this.newGamerName
                    });
                    this.newGamerName = null;
                }
                return false;
            };

            this.launchGame = function() {
                var that = this;
                angular.forEach(this.game.gamers, function(gamer) {

                    gamer.score = that.game.mode;
                });

                $location.path("/game");

            };
        }]
    });
