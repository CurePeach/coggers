import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { ChampionStore } from 'champion/champion_store';
import { convert } from 'data/players';
import { ChampionIcon } from 'ui/base/champion_icon/champion_icon';
import { Container } from 'ui/base/container/container';
import { AttributeValuePair, EmphasizedText } from 'ui/base/typography';

import styles from './champion_row.module.css';

export const ChampionRow = ({
  champion,
  numTotalGames,
}: {
  champion: ChampionStore;
  numTotalGames: number;
}) => {
  const banRate = ((champion.numBans / numTotalGames) * 100).toFixed(2);
  const numPresence = champion.numBans + champion.numPicks;
  const presence = ((numPresence / numTotalGames) * 100).toFixed(2);

  let backgroundStyle: string;
  if (champion.winRate >= 0.5) {
    backgroundStyle = styles.highWinRate;
  } else {
    backgroundStyle = styles.lowWinRate;
  }
  if (champion.numPicks === 0) {
    backgroundStyle = styles.onlyBans;
  }

  const playerFrequencies: Record<string, number> = {};
  const playerWins: Record<string, number> = {};
  champion.scores.forEach((score) => {
    const championName = convert(score.player);
    if (playerFrequencies[championName]) {
      playerFrequencies[championName] += 1;
    } else {
      playerFrequencies[championName] = 1;
    }

    if (!playerWins[championName]) {
      playerWins[championName] = 0;
    }
    if (score.win) {
      playerWins[championName] += 1;
    }
  });

  const playerList: string[] = champion.scores
    .map((score) => {
      return convert(score.player);
    })
    .filter((value, index, self) => {
      return index === self.indexOf(value);
    })
    .sort()
    .sort((a, b) => playerFrequencies[b] - playerFrequencies[a])
    .sort((a, b) => playerWins[b] / playerFrequencies[b] - playerWins[a] / playerFrequencies[a]);

  return (
    <Container width="large">
      <Link to={`../champion/${champion.key}`} className={styles.link}>
        <Container display="flex" className={classNames(styles.championRow, backgroundStyle)}>
          <Container
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            className={styles.championName}
          >
            <ChampionIcon championId={champion.key} size="medium" />
            <EmphasizedText>{champion.championName}</EmphasizedText>
          </Container>
          <Container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="start"
            className={styles.details}
          >
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
            <AttributeValuePair
              attribute="Presence"
              value={`${presence}% (${numPresence} / ${numTotalGames})`}
            />
            {champion.numPicks > 0 && (
              <AttributeValuePair
                attribute="Players"
                value={`${playerList.join(', ')} (${playerList.length})`}
              />
            )}
          </Container>
        </Container>
      </Link>
    </Container>
  );
};
