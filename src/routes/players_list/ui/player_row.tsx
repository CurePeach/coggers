import * as React from 'react';
import { Link } from 'react-router-dom';

import { convert } from 'data/champions';
import type { PlayerStore } from 'player/player_store';
import { AttributeValuePair, Subheading } from 'ui/typography';

import styles from './player_row.module.css';

export const PlayerRow = ({ player }: { player: PlayerStore }) => {
  const champFrequencies: Record<string, number> = {};
  player.scores.forEach((score) => {
    const championName = convert(score.champion);
    if (champFrequencies[championName]) {
      champFrequencies[championName] += 1;
    } else {
      champFrequencies[championName] = 1;
    }
  });

  const champList: string[] = player.scores
    .map((score) => {
      return convert(score.champion);
    })
    .filter((value, index, self) => {
      return index === self.indexOf(value);
    })
    .sort()
    .sort((a, b) => champFrequencies[b] - champFrequencies[a]);

  return (
    <div key={player.key} className={styles.playerRow}>
      <div className={styles.playerName}>
        <Subheading>
          <Link to={`../player/${player.key}`} className={styles.link}>
            {player.playerName}
          </Link>
        </Subheading>
      </div>
      <div className={styles.details}>
        <AttributeValuePair
          attribute="Win rate"
          value={`${(player.winRate * 100).toFixed(2)}% (${player.numWins} / ${player.numGames})`}
        />
        <AttributeValuePair attribute="Number of MVPs" value={player.numMvps.toString()} />
        <AttributeValuePair attribute="Number of Aces" value={player.numAces.toString()} />
        <AttributeValuePair
          attribute="Champions played"
          value={`${champList.join(', ')} (${champList.length})`}
        />
      </div>
    </div>
  );
};
