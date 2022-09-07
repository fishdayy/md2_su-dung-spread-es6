"use strict";
exports.__esModule = true;
exports.TennisGame = void 0;
var TennisGame = /** @class */ (function () {
    function TennisGame() {
        this.score = '';
    }
    TennisGame.prototype.getScore = function (player1Name, player2Name, playerScore1, playerScore2) {
        var tempScore = 0;
        if (playerScore1 == playerScore2) {
            switch (playerScore1) {
                case 0:
                    this.score = "Love-All";
                    break;
                case 1:
                    this.score = "Fifteen-All";
                    break;
                case 2:
                    this.score = "Thirty-All";
                    break;
                case 3:
                    this.score = "Forty-All";
                    break;
                default:
                    this.score = "Deuce";
                    break;
            }
        }
        else if (playerScore1 >= 4 || playerScore2 >= 4) {
            var minusResult = playerScore1 - playerScore2;
            if (minusResult == 1)
                this.score = "Advantage player1";
            else if (minusResult == -1)
                this.score = "Advantage player2";
            else if (minusResult >= 2)
                this.score = "Win for player1";
            else
                this.score = "Win for player2";
        }
        else {
            for (var i = 1; i < 3; i++) {
                if (i == 1)
                    tempScore = playerScore1;
                else {
                    this.score += "-";
                    tempScore = playerScore2;
                }
                switch (tempScore) {
                    case 0:
                        this.score += "Love";
                        break;
                    case 1:
                        this.score += "Fifteen";
                        break;
                    case 2:
                        this.score += "Thirty";
                        break;
                    case 3:
                        this.score += "Forty";
                        break;
                }
            }
        }
    };
    return TennisGame;
}());
exports.TennisGame = TennisGame;
