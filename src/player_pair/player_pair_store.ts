import { PlayerName, convert } from 'data/players';
import { ScoreStore } from 'score/score_store';

export class PlayerPairStore {
  keys: [PlayerName, PlayerName];
  scoresTogether: [ScoreStore, ScoreStore][] = [];

  get firstPlayer() {
    return convert(this.keys[0]);
  }

  get secondPlayer() {
    return convert(this.keys[1]);
  }

  get numGames() {
    return this.scoresTogether.length;
  }

  get numWins() {
    let wins = 0;
    this.scoresTogether.forEach(([firstScore, _secondScore]) => {
      if (firstScore.win) {
        wins += 1;
      }
    });
    return wins;
  }

  get winRate() {
    if (this.numGames === 0) {
      return 0;
    }
    return this.numWins / this.numGames;
  }

  constructor(p1: PlayerName, p2: PlayerName) {
    this.keys = [p1, p2];
  }

  print() {
    console.log(`Pair ${this.firstPlayer} and ${this.secondPlayer}`);
    console.log(`Winrate: ${this.numWins / this.numGames} (${this.numWins} / ${this.numGames})`);
  }
}
