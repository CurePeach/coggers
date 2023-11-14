import * as mobx from 'mobx';

import { PlayerName, convert } from 'data/players';

import { ScoreStore } from 'score/score_store';

export class PlayerPairStore {
  @mobx.observable.ref
  keys: [PlayerName, PlayerName];

  @mobx.observable.ref
  scoresTogether: [ScoreStore, ScoreStore][] = [];

  @mobx.computed
  get firstPlayer() {
    return convert(this.keys[0]);
  }

  @mobx.computed
  get secondPlayer() {
    return convert(this.keys[1]);
  }

  @mobx.computed
  get numGames() {
    return this.scoresTogether.length;
  }

  @mobx.computed
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
