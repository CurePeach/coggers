import { PlayerName, convert } from 'data/players';

export class PlayerPairStore {
  keys: [PlayerName, PlayerName];

  numGames: number = 0;
  numWins: number = 0;

  constructor(p1: PlayerName, p2: PlayerName) {
    this.keys = [p1, p2];
  }

  print() {
    console.log(`Pair ${convert(this.keys[0])} and ${convert(this.keys[1])}`);
    console.log(`Winrate: ${this.numWins / this.numGames} (${this.numWins} / ${this.numGames})`);
  }
}
