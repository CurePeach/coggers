import { ChampionName } from 'data/champions';
import { PlayerName } from 'data/players';
import { Role, Side } from 'data/types';

export class ScoreStore {
  readonly matchId: number;
  readonly player: PlayerName;
  readonly champion: ChampionName;

  readonly side: Side;
  readonly role: Role;
  readonly win: boolean;

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
    side: Side,
    role: Role,
    win: boolean,
    kills: number,
    deaths: number,
    assists: number,
    cs: number
  ) {
    this.matchId = matchId;
    this.player = player;
    this.champion = champion;

    this.side = side;
    this.role = role;
    this.win = win;

    this.kills = kills;
    this.deaths = deaths;
    this.assists = assists;
    this.cs = cs;
  }
}
