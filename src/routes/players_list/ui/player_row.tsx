import * as React from 'react';

import { convert } from 'data/champions';

import { AttributeValuePair, Subheading } from 'ui/typography';

import type { PlayerStore } from 'player/player_store';

import styles from './player_row.module.css';

export const PlayerRow = ({ player }: { player: PlayerStore }) => {
  const champList: string[] = player.scores
    .map((score) => {
      return convert(score.champion);
    })
    .filter((value, index, self) => {
      return index === self.indexOf(value);
    });

  return (
    <div key={player.key} className={styles.playerRow}>
      <div className={styles.playerName}>
        <Subheading>{player.playerName}</Subheading>
      </div>
      <div className={styles.details}>
        <AttributeValuePair
          attribute="Win rate"
          value={`${(player.winRate * 100).toFixed(2)}% (${player.numWins} / ${player.numGames})`}
        />
        <AttributeValuePair
          attribute="Champions played"
          value={`${champList.join(', ')} (${champList.length})`}
        />
      </div>
    </div>
  );
};
