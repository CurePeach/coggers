import { ScoreStore } from 'score/score_store';

import { MatchDto, Side, TeamDto } from 'data/types';

import { MatchStore } from './match_store';

export class MatchPresenter {
  createMatchStore(match: MatchDto) {
    const blueTeam = this.teamToScores(match.id, 'blue', match.win === 'blue', match.teams.blue);
    const redTeam = this.teamToScores(match.id, 'red', match.win === 'red', match.teams.red);

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

  private teamToScores(id: number, side: Side, win: boolean, team: TeamDto) {
    const scores: ScoreStore[] = [];
    for (const player of team.players) {
      const score = new ScoreStore(
        id,
        player.name,
        player.champion,
        side,
        player.role,
        win,
        player.kills,
        player.deaths,
        player.assists,
        player.cs
      );
      scores.push(score);
    }
    return scores;
  }
}
