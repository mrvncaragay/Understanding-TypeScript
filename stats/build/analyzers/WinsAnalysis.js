"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (data) {
        var _this = this;
        var wins = data.reduce(function (acc, next) {
            if (next[1] === _this.team && next[5] === MatchResult_1.MatchResult.HomeWin) {
                return (acc = acc += 1);
            }
            else if (next[2] === 'Man United' && next[5] === MatchResult_1.MatchResult.AwayWin) {
                return (acc = acc += 1);
            }
            return acc;
        }, 0);
        return "Team " + this.team + " won " + wins + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
