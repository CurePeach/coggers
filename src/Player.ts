import { ChampionName } from './matches/champions';
import { PlayerName, convert } from './matches/players';

export type Game = {
  date: Date;
  champion: ChampionName;
  role: 'top' | 'jungle' | 'mid' | 'bot' | 'support' | 'aram';
  kills: number;
  deaths: number;
  assists: number;
  cs: number;
};

export class Player {
  key: PlayerName;

  numGames: number = 0;
  numWins: number = 0;
  numMvps: number = 0;
  numAces: number = 0;

  gamesList: Game[] = [];

  constructor(name: PlayerName) {
    this.key = name;
  }

  print() {
    console.log(`Name: ${convert(this.key)}`);
    console.log(`Winrate: ${this.numWins / this.numGames} (${this.numWins} / ${this.numGames})`);
  }
}
