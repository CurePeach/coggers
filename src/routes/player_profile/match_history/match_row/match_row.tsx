import { convert } from 'data/champions';
import type { ScoreStore } from 'score/score_store';

import styles from './match_row.module.css';

export type MatchRowProps = {
  score: ScoreStore;
};

export const MatchRow = ({ score }: MatchRowProps) => {
  return (
    <div className={styles.matchRow}>
      {convert(score.champion)} {score.kills}/{score.deaths}/{score.assists} {score.cs} CS
      <br />
      Role: {score.role}
      <br />
      Win: {score.win ? 'true' : 'false'}
    </div>
  );
};
