import { PlayerStore } from 'player/player_store';
import { Subheading } from 'ui/base/typography';

import styles from './match_history.module.css';
import { MatchRow } from './match_row/match_row';

export type MatchHistoryProps = {
  player: PlayerStore;
};

export const MatchHistory = ({ player }: MatchHistoryProps) => {
  const matches: React.ReactNode[] = [];
  player.scores.forEach((score, index) => {
    matches.unshift(<MatchRow key={index} score={score} />);
  });

  return (
    <div className={styles.matchHistoryContainer}>
      <Subheading>Match History</Subheading>
      <div>{matches}</div>
    </div>
  );
};
