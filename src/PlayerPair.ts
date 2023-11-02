import { PlayerName } from './matches/players';

export class PlayerPair {
  keys: [PlayerName, PlayerName];

  numGames: number = 0;
  numWins: number = 0;

  constructor(p1: PlayerName, p2: PlayerName) {
    this.keys = [p1, p2];
  }
}
