import { Player } from './Player';
import { PlayerPair } from './PlayerPair';
import { PlayerName } from './matches/players';
import { DraftDto, MatchDto, TeamDto } from './matches/types';

export class Match {
  date: Date;
  effect: string;
  win: 'blue' | 'red';
  mvp: PlayerName;
  ace: PlayerName;

  draft: DraftDto;
  blueTeam: TeamDto;
  redTeam: TeamDto;

  constructor(match: MatchDto) {
    this.date = match.date;
    this.effect = match.effect;
    this.win = match.win;
    this.mvp = match.mvp;
    this.ace = match.ace;

    this.draft = match.draft;
    this.blueTeam = match.teams.blue;
    this.redTeam = match.teams.red;
  }

  updatePlayerData(players: Player[], playerPairs: PlayerPair[]) {
    const winningPlayers: PlayerName[] = this.getPlayerNames(this.getWinningTeam());
    const losingPlayers: PlayerName[] = this.getPlayerNames(this.getLosingTeam());
    const allPlayers: PlayerName[] = winningPlayers.concat(losingPlayers);

    const presentPlayers: Player[] = players.filter((player) => allPlayers.includes(player.key));
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

    const winningPairs: PlayerPair[] = playerPairs.filter(
      (pair) => winningPlayers.includes(pair.keys[0]) && winningPlayers.includes(pair.keys[1])
    );
    for (const pair of winningPairs) {
      pair.numGames += 1;
      pair.numWins += 1;
    }

    const losingPairs: PlayerPair[] = playerPairs.filter(
      (pair) => losingPlayers.includes(pair.keys[0]) && losingPlayers.includes(pair.keys[1])
    );
    for (const pair of losingPairs) {
      pair.numGames += 1;
    }
  }

  private getWinningTeam(): TeamDto {
    if (this.win === 'blue') {
      return this.blueTeam;
    }

    return this.redTeam;
  }

  private getLosingTeam(): TeamDto {
    if (this.win === 'blue') {
      return this.redTeam;
    }

    return this.blueTeam;
  }

  private getPlayerNames(team: TeamDto): PlayerName[] {
    const names: PlayerName[] = [];

    for (const player of team.players) {
      names.push(player.name);
    }

    return names;
  }
}
