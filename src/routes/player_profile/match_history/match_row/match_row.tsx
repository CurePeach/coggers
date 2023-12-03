import { convert } from 'data/players';
import { MatchStore } from 'match/match_store';
import type { ScoreStore } from 'score/score_store';
import { ChampionIcon } from 'ui/base/champion_icon/champion_icon';

import styles from './match_row.module.css';

export type MatchRowProps = {
  score: ScoreStore;
  match: MatchStore;
};

export const MatchRow = ({ score, match }: MatchRowProps) => {
  const blueTeam = match.blueTeam.map((thisScore, index) => {
    let playerName: React.ReactNode;
    if (score.player === thisScore.player) {
      playerName = <b>{convert(thisScore.player)}</b>;
    } else {
      playerName = convert(thisScore.player);
    }
    return (
      <div key={index}>
        <ChampionIcon championId={thisScore.champion} size="inline" />
        {playerName}
      </div>
    );
  });
  const redTeam = match.redTeam.map((thisScore, index) => {
    let playerName: React.ReactNode;
    if (score.player === thisScore.player) {
      playerName = <b>{convert(thisScore.player)}</b>;
    } else {
      playerName = convert(thisScore.player);
    }
    return (
      <div key={index}>
        <ChampionIcon championId={thisScore.champion} size="inline" />
        {playerName}
      </div>
    );
  });

  return (
    <div className={styles.matchRow}>
      <div>
        <ChampionIcon championId={score.champion} size="small" />
      </div>
      <div>
        {score.kills}/{score.deaths}/{score.assists}
        <br />
        {score.kda.toFixed(2)} KDA
        <br />
        {score.cs} CS
      </div>
      <div className={styles.teams}>
        <div className={styles.teamContainer}>{blueTeam}</div>
        <div className={styles.teamContainer}>{redTeam}</div>
      </div>
    </div>
  );
};
