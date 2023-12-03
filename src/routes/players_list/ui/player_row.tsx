import * as React from 'react';
import { Link } from 'react-router-dom';

import { ChampionName as ChampionId, convert } from 'data/champions';
import type { PlayerStore } from 'player/player_store';
import { AttributeValuePair, Subheading } from 'ui/base/typography';
import { ChampionName } from 'ui/champion_name/champion_name';

import styles from './player_row.module.css';

type Frequency = {
  id: ChampionId;
  frequency: number;
};

export const PlayerRow = ({ player }: { player: PlayerStore }) => {
  // TODO: there has got to be an easier way to do this - one where i don't have to create
  // THREE data structures :sus:
  const champFrequencies: Record<string, Frequency> = {};
  player.scores.forEach((score) => {
    const championName = convert(score.champion);
    if (champFrequencies[championName]) {
      champFrequencies[championName].frequency += 1;
    } else {
      const newFrequency = {
        frequency: 1,
        id: score.champion,
      };
      champFrequencies[championName] = newFrequency;
    }
  });

  const champSortedList: string[] = player.scores
    .map((score) => {
      return convert(score.champion);
    })
    .filter((value, index, self) => {
      return index === self.indexOf(value);
    })
    .sort()
    .sort((a, b) => champFrequencies[b].frequency - champFrequencies[a].frequency);

  const champList: React.ReactNode[] = [];
  champSortedList.forEach((champ, index) => {
    const key = champFrequencies[champ].id;
    const withComma = index !== champSortedList.length - 1;
    champList.push(<ChampionName key={key} championId={key} withComma={withComma} />);
  });

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
        <div>
          <b>Champions played:</b> {champList} ({champList.length})
        </div>
      </div>
    </div>
  );
};
