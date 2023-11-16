import * as React from 'react';
import { LoaderData, useLoaderData } from 'react-router-typesafe';

import type { championsListLoader } from 'utils/route_loaders';

import { Title } from 'ui/typography';

import { ChampionRow } from './ui/champion_row';

export const ChampionsList = () => {
  const data = useLoaderData() as LoaderData<typeof championsListLoader>;

  const championList: JSX.Element[] = [];
  for (const champ of data.champions) {
    if (champ.numPicks === 0 && champ.numBans === 0) {
      continue;
    }
    championList.push(<ChampionRow key={champ.key} champion={champ} />);
  }

  return (
    <div>
      <Title>Champions List</Title>
      {championList}
    </div>
  );
};
