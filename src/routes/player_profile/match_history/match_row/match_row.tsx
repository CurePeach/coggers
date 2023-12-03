import { convert } from 'data/champions';
import type { ScoreStore } from 'score/score_store';

export type MatchRowProps = {
  score: ScoreStore;
};

export const MatchRow = ({ score }: MatchRowProps) => {
  return (
    <div style={{ padding: '10px' }}>
      {convert(score.champion)} {score.kills}/{score.deaths}/{score.assists} {score.cs} CS
      <br />
      Role: {score.role}
      <br />
      Win: {score.win ? 'true' : 'false'}
    </div>
  );
};
