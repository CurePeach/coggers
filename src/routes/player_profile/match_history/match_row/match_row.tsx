import type { ScoreStore } from 'score/score_store';
import { ChampionIcon } from 'ui/base/champion_icon/champion_icon';

import styles from './match_row.module.css';

export type MatchRowProps = {
  score: ScoreStore;
};

export const MatchRow = ({ score }: MatchRowProps) => {
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
    </div>
  );
};
