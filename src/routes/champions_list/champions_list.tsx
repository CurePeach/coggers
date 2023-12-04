import * as React from 'react';
import { LoaderData, useLoaderData } from 'react-router-typesafe';

import { Container } from 'ui/base/container/container';
import { AttributeValuePair, Title } from 'ui/base/typography';
import type { championsListLoader } from 'utils/route_loaders';

import styles from './champions_list.module.css';
import { ChampionRow } from './ui/champion_row';

export const ChampionsList = () => {
  const data = useLoaderData() as LoaderData<typeof championsListLoader>;
  const numTotalGames = data.matches.length;

  const championList: JSX.Element[] = [];
  const unplayedChampions: string[] = [];
  for (const champ of data.champions) {
    if (champ.numPicks === 0 && champ.numBans === 0) {
      unplayedChampions.push(champ.championName);
    } else {
      championList.push(
        <ChampionRow key={champ.key} champion={champ} numTotalGames={numTotalGames} />
      );
    }
  }

  return (
    <div className={styles.root}>
      <Title>Champions List</Title>
      <Container display="flex" flexDirection="column" alignItems="center">
        {championList}
        <AttributeValuePair attribute="No presence" value={`${unplayedChampions.join(', ')}`} />
      </Container>
    </div>
  );
};
