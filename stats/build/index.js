"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var manUnitedWins = reader.data.reduce(function (acc, next) {
    if (next[1] === 'Man United' && next[5] === MatchResult_1.MatchResult.HomeWin) {
        return (acc = acc += 1);
    }
    else if (next[2] === 'Man United' && next[5] === MatchResult_1.MatchResult.AwayWin) {
        return (acc = acc += 1);
    }
    return acc;
}, 0);
console.log(manUnitedWins);
