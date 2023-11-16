import { AttributeValuePair, Subheading } from 'ui/typography';

import { ChampionStore } from 'champion/champion_store';

import styles from './champion_row.module.css';

export const ChampionRow = ({
  champion,
  numTotalGames,
}: {
  champion: ChampionStore;
  numTotalGames: number;
}) => {
  const banRate = ((champion.numBans / numTotalGames) * 100).toFixed(2);

  return (
    <div key={champion.key} className={styles.championRow}>
      <div className={styles.championName}>
        <Subheading>{champion.championName}</Subheading>
      </div>
      <div className={styles.details}>
        <AttributeValuePair
          attribute="Win rate"
          value={`${(champion.winRate * 100).toFixed(2)}% (${champion.numWins} / ${
            champion.numPicks
          })`}
        />
        <AttributeValuePair
          attribute="Ban rate"
          value={`${banRate}% (${champion.numBans} / ${numTotalGames})`}
        />
      </div>
    </div>
  );
};
