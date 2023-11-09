import { ChampionName } from 'data/champions';
import { PlayerName } from 'data/players';
import { MatchDto, TeamDto } from 'data/types';

import { ChampionStore } from 'champion/champion_store';
import { PlayerStore } from 'player/player_store';
import { PlayerPairStore } from 'player_pair/player_pair_store';

import { MatchStore } from './match_store';

export class MatchPresenter {
  createMatchStore(matchDto: MatchDto) {
    return new MatchStore(matchDto);
  }

  updatePlayerData(match: MatchStore, players: PlayerStore[], playerPairs: PlayerPairStore[]) {
    const winningPlayers: PlayerName[] = this.getPlayerNames(match.winningTeam);
    const losingPlayers: PlayerName[] = this.getPlayerNames(match.losingTeam);
    const allPlayers: PlayerName[] = winningPlayers.concat(losingPlayers);

    const presentPlayers: PlayerStore[] = players.filter((player) =>
      allPlayers.includes(player.key)
    );
    for (const player of presentPlayers) {
      if (player.key === match.mvp) {
        player.numMvps += 1;
      } else if (player.key === match.ace) {
        player.numAces += 1;
      }

      if (winningPlayers.includes(player.key)) {
        player.numWins += 1;
      }

      if (allPlayers.includes(player.key)) {
        player.numGames += 1;
      }
    }

    const gameData = match.blueTeam.players.concat(match.redTeam.players);
    for (const data of gameData) {
      const player = presentPlayers.find((player) => player.key === data.name);
      player?.gamesList.push({
        date: match.date,
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

  updateChampionData(match: MatchStore, champions: ChampionStore[]) {
    const winningChamps: ChampionName[] = this.getChampionNames(match.winningTeam);
    const losingChamps: ChampionName[] = this.getChampionNames(match.losingTeam);
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
    for (const bans of match.draft.bans.blue.concat(match.draft.bans.red)) {
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
