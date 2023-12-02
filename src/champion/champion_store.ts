import { ScoreStore } from 'score/score_store';

import { ChampionName, convert } from '../data/champions';

export class ChampionStore {
  key: ChampionName;
  bans: number[] = [];
  scores: ScoreStore[] = [];

  get championName() {
    return convert(this.key);
  }

  get numBans() {
    return this.bans.length;
  }

  get numPicks() {
    return this.scores.length;
  }

  get numWins() {
    let wins = 0;
    this.scores.forEach((score) => {
      if (score.win) {
        wins += 1;
      }
    });
    return wins;
  }

  get winRate() {
    if (this.numPicks === 0) {
      return 0;
    }
    return this.numWins / this.numPicks;
  }

  constructor(name: ChampionName) {
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
