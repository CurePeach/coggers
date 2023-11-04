import { ChampionName, convert } from './matches/champions';

export class Champion {
  key: ChampionName;

  numBans: number = 0;
  numGames: number = 0;
  numWins: number = 0;

  constructor(name: ChampionName) {
    this.key = name;
  }

  print() {
    console.log(`Name: ${convert(this.key)}`);
    if (this.numGames > 0) {
      console.log(`Winrate: ${this.numWins / this.numGames} (${this.numWins} / ${this.numGames})`);
    }
    if (this.numBans > 0) {
      console.log(`Number of bans: ${this.numBans}`);
    }
  }
}
