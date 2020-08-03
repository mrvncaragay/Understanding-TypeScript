import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins = reader.data.reduce((acc, next) => {
  if (next[1] === 'Man United' && next[5] === MatchResult.HomeWin) {
    return (acc = acc += 1);
  } else if (next[2] === 'Man United' && next[5] === MatchResult.AwayWin) {
    return (acc = acc += 1);
  }

  return acc;
}, 0);

console.log(manUnitedWins);
