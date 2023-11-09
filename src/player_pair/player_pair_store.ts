import * as mobx from 'mobx';

import { PlayerName, convert } from 'data/players';

export class PlayerPairStore {
  @mobx.observable.ref
  keys: [PlayerName, PlayerName];

  @mobx.observable.ref
  numGames: number = 0;

  @mobx.observable.ref
  numWins: number = 0;

  @mobx.computed
  get firstPlayer() {
    return convert(this.keys[0]);
  }

  @mobx.computed
  get secondPlayer() {
    return convert(this.keys[1]);
  }

  constructor(p1: PlayerName, p2: PlayerName) {
    this.keys = [p1, p2];
  }

  print() {
    console.log(`Pair ${this.firstPlayer} and ${this.secondPlayer}`);
    console.log(`Winrate: ${this.numWins / this.numGames} (${this.numWins} / ${this.numGames})`);
  }
}
