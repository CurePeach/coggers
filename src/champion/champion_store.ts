import * as mobx from 'mobx';

import { ChampionName, convert } from '../data/champions';

export class ChampionStore {
  @mobx.observable.ref
  key: ChampionName;

  @mobx.observable.ref
  numBans: number = 0;

  @mobx.observable.ref
  numPicks: number = 0;

  @mobx.observable.ref
  numWins: number = 0;

  @mobx.computed
  get championName() {
    return convert(this.key);
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
