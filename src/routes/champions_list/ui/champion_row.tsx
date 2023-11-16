import { Link } from 'react-router-dom';

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

  let backgroundStyle: string;
  if (champion.winRate >= 0.5) {
    backgroundStyle = styles.highWinRate;
  } else {
    backgroundStyle = styles.lowWinRate;
  }
  if (champion.numPicks === 0) {
    backgroundStyle = styles.onlyBans;
  }

  return (
    <Link to={`../champion/${champion.key}`} className={styles.link}>
      <div className={`${styles.championRow} ${backgroundStyle}`}>
        <div className={styles.championName}>
          <Subheading>{champion.championName}</Subheading>
        </div>
        <div className={styles.details}>
          {champion.numPicks > 0 && (
            <AttributeValuePair
              attribute="Win rate"
              value={`${(champion.winRate * 100).toFixed(2)}% (${champion.numWins} / ${
                champion.numPicks
              })`}
            />
          )}
          {champion.numBans > 0 && (
            <AttributeValuePair
              attribute="Ban rate"
              value={`${banRate}% (${champion.numBans} / ${numTotalGames})`}
            />
          )}
        </div>
      </div>
    </Link>
  );
};
