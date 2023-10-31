import { Player } from './Player';
import { PlayerName, convert } from './matches/players';
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

  updatePlayerData(players: Player[]) {
    const winningPlayers: PlayerName[] = this.getPlayerNames(this.getWinningTeam());
    const allPlayers: PlayerName[] = this.getPlayerNames(this.blueTeam).concat(
      this.getPlayerNames(this.redTeam)
    );

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
  }

  private getWinningTeam(): TeamDto {
    if (this.win === 'blue') {
      return this.blueTeam;
    }

    return this.redTeam;
  }

  private getPlayerNames(team: TeamDto): PlayerName[] {
    const names: PlayerName[] = [];

    for (const player of team.players) {
      names.push(player.name);
    }

    return names;
  }
}
