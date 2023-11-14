import * as mobx from 'mobx';

import { convert as championConvert } from 'data/champions';
import { PlayerName, convert as playerConvert } from 'data/players';

import { ScoreStore } from 'score/score_store';

export class PlayerStore {
  @mobx.observable.ref
  key: PlayerName;

  @mobx.observable.ref
  numMvps: number = 0;

  @mobx.observable.ref
  numAces: number = 0;

  @mobx.observable.ref
  scores: ScoreStore[] = [];

  @mobx.computed
  get playerName() {
    return playerConvert(this.key);
  }

  @mobx.computed
  get numWins() {
    let wins = 0;
    this.scores.forEach((score) => {
      if (score.win) {
        wins += 1;
      }
    });
    return wins;
  }

  @mobx.computed
  get numGames() {
    return this.scores.length;
  }

  @mobx.computed
  get winRate() {
    if (this.numGames === 0) {
      return 0;
    }
    return this.numWins / this.numGames;
  }

  constructor(name: PlayerName) {
    this.key = name;
  }

  print() {
    console.log(`Name: ${this.playerName}`);
    console.log(`Winrate: ${this.numWins / this.numGames} (${this.numWins} / ${this.numGames})`);

    for (const score of this.scores) {
      console.log(championConvert(score.champion));
    }
  }
}
