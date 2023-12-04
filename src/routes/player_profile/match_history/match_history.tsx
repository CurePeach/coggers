import { MatchStore } from 'match/match_store';
import { PlayerStore } from 'player/player_store';
import { Container } from 'ui/base/container/container';
import { Subheading } from 'ui/base/typography';

import styles from './match_history.module.css';
import { MatchRow } from './match_row/match_row';

export type MatchHistoryProps = {
  player: PlayerStore;
  allMatches: MatchStore[];
};

export const MatchHistory = ({ player, allMatches }: MatchHistoryProps) => {
  const matches: React.ReactNode[] = [];
  player.scores.forEach((score, index) => {
    const match = allMatches.find((match) => match.id === score.matchId);
    if (match) {
      matches.unshift(<MatchRow key={index} score={score} match={match} />);
    }
  });

  return (
    <Container width="medium">
      <div className={styles.matchHistoryContainer}>
        <Subheading>Match History</Subheading>
        <div>{matches}</div>
      </div>
    </Container>
  );
};
