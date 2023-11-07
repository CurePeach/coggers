import { ChampionName, convert } from '../data/champions';

export class Champion {
  key: ChampionName;

  numBans: number = 0;
  numPicks: number = 0;
  numWins: number = 0;

  constructor(name: ChampionName) {
    this.key = name;
  }

  print() {
    console.log(`Name: ${convert(this.key)}`);
    if (this.numPicks > 0) {
      console.log(`Winrate: ${this.numWins / this.numPicks} (${this.numWins} / ${this.numPicks})`);
    }
    if (this.numBans > 0) {
      console.log(`Number of bans: ${this.numBans}`);
    }
  }
}
