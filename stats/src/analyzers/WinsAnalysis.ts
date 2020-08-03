import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(data: MatchData[]): string {
    const wins = data.reduce((acc, next) => {
      if (next[1] === this.team && next[5] === MatchResult.HomeWin) {
        return (acc = acc += 1);
      } else if (next[2] === 'Man United' && next[5] === MatchResult.AwayWin) {
        return (acc = acc += 1);
      }

      return acc;
    }, 0);

    return `Team ${this.team} won ${wins} games`;
  }
}
