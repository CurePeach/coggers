import * as mobx from 'mobx';
import { ScoreStore } from 'score/score_store';

import { convert as championConvert } from 'data/champions';
import { PlayerName, convert as playerConvert } from 'data/players';

export class PlayerStore {
  @mobx.observable.ref
  key: PlayerName;

  // TODO: don't need these anymore since we have the games list
  // or should i keep the redundant information for efficiency? :thinking:
  @mobx.observable.ref
  numGames: number = 0;

  @mobx.observable.ref
  numWins: number = 0;

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
