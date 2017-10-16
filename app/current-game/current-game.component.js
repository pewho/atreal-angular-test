'use strict';

angular.
    module('currentGame')
    .component('currentGame', {
        templateUrl: 'current-game/current-game.template.html',
        controllerAs: "gameManager",
        controller: ["Game","$location", function(game, $location) {
            this.try = 0;

            this.isWon = false;
            this.gamerWon;

            this.game = game;
            this.currentGamerIdx = 0;
            this.currentTour = 1;
            this.currentTries = [];

            this.addTry = function() {
                if (this.try === 0) {
                    return false;
                }

                this.currentTries.push(this.try);
                this.try = 0;
                this.verifyScore();

                if (this.currentTries.length >= 3) {
                    this.registerScore();
                    this.changeGamer();
                }
            }

            this.currentTriesScore = function() {
                var tScore = 0;
                angular.forEach(this.currentTries, function(tryScore){
                    tScore = tScore + tryScore;
                });
                return tScore;
            }

            this.currentGamerScore = function() {
                return this.currentGamer().score - this.currentTriesScore();
            }

            this.currentGamer = function() {
                return this.game.gamers[this.currentGamerIdx];
            }

            this.verifyScore = function() {
                if (this.currentGamer().score == this.currentTriesScore()) {
                    this.win(this.currentGamer());
                }

                if (this.currentGamer().score < this.currentTriesScore()) {
                    this.changeGamer();
                }
            }

            this.win = function(gamer) {
                this.isWon = true;
                this.gamerWon = gamer;
            }

            this.registerScore = function() {
                this.currentGamer().score = this.currentGamer().score - this.currentTriesScore();
            }

            this.changeGamer = function() {
                this.currentScore = 0;
                this.currentTries = [];
                this.currentGamerIdx = this.currentGamerIdx + 1;
                if (this.currentGamerIdx > this.game.gamers.length - 1) {
                    this.currentGamerIdx = 0;
                    this.currentTour = this.currentTour + 1;
                }
            }

            this.resetGame = function() {
                this.game.resetGame();
                $location.path("/");
            }

            this.resetSameGame = function() {
                var gameInfo = this.game;
                angular.forEach(this.game.gamers, function(gamer) {
                    gamer.score = gameInfo.mode;
                });

                this.isWon = false;
                this.gamerWon = null;
                this.currentTour = 1;
                this.currentGamerIdx = 0;
                this.currentTries = [];
                this.try = 0;
            }
        }]
    });
