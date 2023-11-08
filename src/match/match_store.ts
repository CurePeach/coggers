import * as mobx from 'mobx';

import { ChampionName } from 'data/champions';
import { PlayerName } from 'data/players';
import { DraftDto, MatchDto, TeamDto } from 'data/types';

import { ChampionStore } from 'champion/champion_store';
import { PlayerStore } from 'player/player_store';
import { PlayerPairStore } from 'player_pair/player_pair_store';

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

  updatePlayerData(players: PlayerStore[], playerPairs: PlayerPairStore[]) {
    const winningPlayers: PlayerName[] = this.getPlayerNames(this.winningTeam);
    const losingPlayers: PlayerName[] = this.getPlayerNames(this.losingTeam);
    const allPlayers: PlayerName[] = winningPlayers.concat(losingPlayers);

    const presentPlayers: PlayerStore[] = players.filter((player) =>
      allPlayers.includes(player.key)
    );
    for (const player of presentPlayers) {
      if (player.key === this.mvp) {
        player.numMvps += 1;
      } else if (player.key === this.ace) {
        player.numAces += 1;
      }

      if (winningPlayers.includes(player.key)) {
        player.numWins += 1;
      }

      if (allPlayers.includes(player.key)) {
        player.numGames += 1;
      }
    }

    const gameData = this.blueTeam.players.concat(this.redTeam.players);
    for (const data of gameData) {
      const player = presentPlayers.find((player) => player.key === data.name);
      player?.gamesList.push({
        date: this.date,
        champion: data.champion,
        role: data.role,
        kills: data.kills,
        deaths: data.deaths,
        assists: data.assists,
        cs: data.cs,
      });
    }

    const winningPairs: PlayerPairStore[] = playerPairs.filter(
      (pair) => winningPlayers.includes(pair.keys[0]) && winningPlayers.includes(pair.keys[1])
    );
    for (const pair of winningPairs) {
      pair.numGames += 1;
      pair.numWins += 1;
    }

    const losingPairs: PlayerPairStore[] = playerPairs.filter(
      (pair) => losingPlayers.includes(pair.keys[0]) && losingPlayers.includes(pair.keys[1])
    );
    for (const pair of losingPairs) {
      pair.numGames += 1;
    }
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

  private getPlayerNames(team: TeamDto): PlayerName[] {
    const names: PlayerName[] = [];

    for (const player of team.players) {
      names.push(player.name);
    }

    return names;
  }

  private getChampionNames(team: TeamDto): ChampionName[] {
    const names: ChampionName[] = [];

    for (const player of team.players) {
      names.push(player.champion);
    }

    return names;
  }
}
