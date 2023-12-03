import { convert } from 'data/champions';
import { PlayerStore } from 'player/player_store';
import { Subheading } from 'ui/base/typography';

export type MatchHistoryProps = {
  player: PlayerStore;
};

export const MatchHistory = ({ player }: MatchHistoryProps) => {
  const matches: React.ReactNode[] = [];
  player.scores.forEach((score, index) => {
    matches.unshift(
      <div key={index} style={{ padding: '10px' }}>
        {convert(score.champion)} {score.kills}/{score.deaths}/{score.assists} {score.cs} CS
        <br />
        Role: {score.role}
        <br />
        Win: {score.win ? 'true' : 'false'}
      </div>
    );
  });

  return (
    <div>
      <Subheading>Match History</Subheading>
      <div>{matches}</div>
    </div>
  );
};
