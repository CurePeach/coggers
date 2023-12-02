import { PlayerName } from 'data/players';
import { DraftDto, Side } from 'data/types';
import { ScoreStore } from 'score/score_store';

export class MatchStore {
  id: number;
  date: Date;
  effect: string;
  win: Side;
  mvp: PlayerName;
  ace: PlayerName;

  draft: DraftDto;
  blueTeam: ScoreStore[];
  redTeam: ScoreStore[];

  get winningTeam() {
    if (this.win === 'blue') {
      return this.blueTeam;
    }

    return this.redTeam;
  }

  get losingTeam() {
    if (this.win === 'blue') {
      return this.redTeam;
    }

    return this.blueTeam;
  }

  constructor(
    id: number,
    date: Date,
    effect: string,
    win: Side,
    mvp: PlayerName,
    ace: PlayerName,
    draft: DraftDto,
    blueTeam: ScoreStore[],
    redTeam: ScoreStore[]
  ) {
    this.id = id;

    this.date = date;
    this.effect = effect;

    this.win = win;
    this.mvp = mvp;
    this.ace = ace;

    this.draft = draft;
    this.blueTeam = blueTeam;
    this.redTeam = redTeam;
  }
}
