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

  updateChampionData(champions: ChampionStore[]) {
    const winningChamps: ChampionName[] = this.getChampionNames(this.winningTeam);
    const losingChamps: ChampionName[] = this.getChampionNames(this.losingTeam);
    const allChamps: ChampionName[] = winningChamps.concat(losingChamps);

    const presentChamps: ChampionStore[] = champions.filter((champ) =>
      allChamps.includes(champ.key)
    );
    for (const champ of presentChamps) {
      if (winningChamps.includes(champ.key)) {
        champ.numWins += 1;
      }

      if (allChamps.includes(champ.key)) {
        champ.numPicks += 1;
      }
    }

    const bannedChampNames: ChampionName[] = [];
    for (const bans of this.draft.bans.blue.concat(this.draft.bans.red)) {
      for (const champ of bans) {
        bannedChampNames.push(champ);
      }
    }
    const bannedChamps: ChampionStore[] = champions.filter((champ) =>
      bannedChampNames.includes(champ.key)
    );
    for (const champ of bannedChamps) {
      champ.numBans += 1;
    }
  }

  private getChampionNames(team: TeamDto): ChampionName[] {
    const names: ChampionName[] = [];

    for (const player of team.players) {
      names.push(player.champion);
    }

    return names;
  }
}
