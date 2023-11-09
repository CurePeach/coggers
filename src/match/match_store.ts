import * as mobx from 'mobx';

import { ChampionName } from 'data/champions';
import { PlayerName } from 'data/players';
import { DraftDto, MatchDto, TeamDto } from 'data/types';

import { ChampionStore } from 'champion/champion_store';

export class MatchStore {
  @mobx.observable.ref
  date: Date;

  @mobx.observable.ref
  effect: string;

  @mobx.observable.ref
  win: 'blue' | 'red';

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

  constructor(match: MatchDto) {
    mobx.makeObservable(this);

    this.date = match.date;
    this.effect = match.effect;
    this.win = match.win;
    this.mvp = match.mvp;
    this.ace = match.ace;

    this.draft = match.draft;
    this.blueTeam = match.teams.blue;
    this.redTeam = match.teams.red;
  }
}
