import { ScoreStore } from 'score/score_store';

import { ChampionName } from 'data/champions';
import { PlayerName } from 'data/players';
import { MatchDto, Side, TeamDto } from 'data/types';

import { ChampionStore } from 'champion/champion_store';
import { PlayerStore } from 'player/player_store';
import { PlayerPairStore } from 'player_pair/player_pair_store';

import { MatchStore } from './match_store';

export class MatchPresenter {
  createMatchStore(match: MatchDto) {
    const blueTeam = this.teamToScores(match.id, 'blue', match.teams.blue);
    const redTeam = this.teamToScores(match.id, 'red', match.teams.red);

    return new MatchStore(
      match.id,
      match.date,
      match.effect,
      match.win,
      match.mvp,
      match.ace,
      match.draft,
      blueTeam,
      redTeam
    );
  }

  updatePlayerData(match: MatchStore, players: PlayerStore[], playerPairs: PlayerPairStore[]) {
    const winningPlayers = this.getPlayerNames(match.winningTeam);
    const losingPlayers = this.getPlayerNames(match.losingTeam);
    const allPlayers = winningPlayers.concat(losingPlayers);

    const presentPlayers = players.filter((player) => allPlayers.includes(player.key));
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

    const gameData = match.blueTeam.concat(match.redTeam);
    for (const data of gameData) {
      const player = presentPlayers.find((player) => player.key === data.player);
      if (player) {
        player?.scores.push(data);
      } else {
        console.error(`Error: cannot find player named ${data.player}`);
      }
    }

    const winningPairs = playerPairs.filter(
      (pair) => winningPlayers.includes(pair.keys[0]) && winningPlayers.includes(pair.keys[1])
    );
    for (const pair of winningPairs) {
      pair.numGames += 1;
      pair.numWins += 1;
    }

    const losingPairs = playerPairs.filter(
      (pair) => losingPlayers.includes(pair.keys[0]) && losingPlayers.includes(pair.keys[1])
    );
    for (const pair of losingPairs) {
      pair.numGames += 1;
    }
  }

  updateChampionData(match: MatchStore, champions: ChampionStore[]) {
    const winningChamps = this.getChampionNames(match.winningTeam);
    const losingChamps = this.getChampionNames(match.losingTeam);
    const allChamps = winningChamps.concat(losingChamps);

    const presentChamps = champions.filter((champ) => allChamps.includes(champ.key));
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
    const bannedChamps = champions.filter((champ) => bannedChampNames.includes(champ.key));
    for (const champ of bannedChamps) {
      champ.numBans += 1;
    }
  }

  private teamToScores(id: number, side: Side, team: TeamDto) {
    const scores: ScoreStore[] = [];
    for (const player of team.players) {
      const score = new ScoreStore(
        id,
        player.name,
        player.champion,
        side,
        player.role,
        player.kills,
        player.deaths,
        player.assists,
        player.cs
      );
      scores.push(score);
    }
    return scores;
  }

  private getPlayerNames(team: ScoreStore[]): PlayerName[] {
    const names: PlayerName[] = [];

    for (const score of team) {
      names.push(score.player);
    }

    return names;
  }

  private getChampionNames(team: ScoreStore[]): ChampionName[] {
    const names: ChampionName[] = [];

    for (const score of team) {
      names.push(score.champion);
    }

    return names;
  }
}
