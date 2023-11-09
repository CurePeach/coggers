import * as mobx from 'mobx';

import { PlayerName } from 'data/players';
import { DraftDto, Side, TeamDto } from 'data/types';

export class MatchStore {
  @mobx.observable.ref
  id: number;

  @mobx.observable.ref
  date: Date;

  @mobx.observable.ref
  effect: string;

  @mobx.observable.ref
  win: Side;

  @mobx.observable.ref
  mvp: PlayerName;

  @mobx.observable.ref
  ace: PlayerName;

  @mobx.observable.ref
  draft: DraftDto;

  @mobx.observable.ref
  blueTeam: TeamDto;

  @mobx.observable.ref
  redTeam: TeamDto;

  @mobx.computed
  get winningTeam() {
    if (this.win === 'blue') {
      return this.blueTeam;
    }

    return this.redTeam;
  }

  @mobx.computed
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
    blueTeam: TeamDto,
    redTeam: TeamDto
  ) {
    mobx.makeObservable(this);

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
