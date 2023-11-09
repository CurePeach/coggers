import * as mobx from 'mobx';

import { ChampionName } from 'data/champions';
import { convert as championConvert } from 'data/champions';
import { PlayerName, convert as playerConvert } from 'data/players';

export type Game = {
  date: Date;
  champion: ChampionName;
  role: 'top' | 'jungle' | 'mid' | 'bot' | 'support' | 'aram';
  kills: number;
  deaths: number;
  assists: number;
  cs: number;
};

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
  gamesList: Game[] = [];

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

    for (const game of this.gamesList) {
      console.log(championConvert(game.champion));
    }
  }
}
