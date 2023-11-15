import * as React from 'react';

import { convert } from 'data/champions';

import { Subheading } from 'ui/typography';

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
        <div>
          Winrate: {(player.winRate * 100).toFixed(2)} ({player.numWins} / {player.numGames})
        </div>
        <div>Champions played: {champList.join(', ')}</div>
      </div>
    </div>
  );
};
