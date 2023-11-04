import { ChampionName, convert } from './matches/champions';

export class Champion {
  key: ChampionName;

  numGames: number = 0;
  numWins: number = 0;

  constructor(name: ChampionName) {
    this.key = name;
  }

  print() {
    console.log(`Name: ${convert(this.key)}`);
    console.log(`Winrate: ${this.numWins / this.numGames} (${this.numWins} / ${this.numGames})`);
  }
}
