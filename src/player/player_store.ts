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
  key: PlayerName;

  // TODO: don't need these anymore since we have the games list
  // or should i keep the redundant information for efficiency? :thinking:
  numGames: number = 0;
  numWins: number = 0;
  numMvps: number = 0;
  numAces: number = 0;

  gamesList: Game[] = [];

  constructor(name: PlayerName) {
    this.key = name;
  }

  print() {
    console.log(`Name: ${playerConvert(this.key)}`);
    console.log(`Winrate: ${this.numWins / this.numGames} (${this.numWins} / ${this.numGames})`);

    for (const game of this.gamesList) {
      console.log(championConvert(game.champion));
    }
  }
}
