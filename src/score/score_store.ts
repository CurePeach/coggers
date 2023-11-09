import * as mobx from 'mobx';

import { ChampionName } from 'data/champions';
import { PlayerName } from 'data/players';

export class ScoreStore {
  readonly matchId: number;
  readonly player: PlayerName;
  readonly champion: ChampionName;

  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly cs: number;

  get kda() {
    const divisor = this.deaths > 0 ? this.deaths : 1;
    return (this.kills + this.assists) / divisor;
  }

  get kdaToString() {
    return `${this.kills}/${this.deaths}/${this.assists}`;
  }

  constructor(
    matchId: number,
    player: PlayerName,
    champion: ChampionName,
    kills: number,
    deaths: number,
    assists: number,
    cs: number
  ) {
    this.matchId = matchId;
    this.player = player;
    this.champion = champion;

    this.kills = kills;
    this.deaths = deaths;
    this.assists = assists;
    this.cs = cs;
  }
}
