import * as mobx from 'mobx';
import { ScoreStore } from 'score/score_store';

import { ChampionName, convert } from '../data/champions';

export class ChampionStore {
  @mobx.observable.ref
  key: ChampionName;

  @mobx.observable.ref
  bans: number[] = [];

  @mobx.observable.ref
  scores: ScoreStore[] = [];

  @mobx.computed
  get championName() {
    return convert(this.key);
  }

  @mobx.computed
  get numBans() {
    return this.bans.length;
  }

  @mobx.computed
  get numPicks() {
    return this.scores.length;
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

  constructor(name: ChampionName) {
    mobx.makeObservable(this);
    this.key = name;
  }

  print() {
    console.log(`Name: ${this.championName}`);
    if (this.numPicks > 0) {
      console.log(`Winrate: ${this.numWins / this.numPicks} (${this.numWins} / ${this.numPicks})`);
    }
    if (this.numBans > 0) {
      console.log(`Number of bans: ${this.numBans}`);
    }
  }
}
