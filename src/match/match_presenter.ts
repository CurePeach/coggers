import { PlayerName } from 'data/players';
import { TeamDto } from 'data/types';

import { PlayerStore } from 'player/player_store';
import { PlayerPairStore } from 'player_pair/player_pair_store';

import { MatchStore } from './match_store';

export class MatchPresenter {
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

  private getPlayerNames(team: TeamDto): PlayerName[] {
    const names: PlayerName[] = [];

    for (const player of team.players) {
      names.push(player.name);
    }

    return names;
  }
}
