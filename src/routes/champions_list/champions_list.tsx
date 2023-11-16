import * as React from 'react';
import { LoaderData, useLoaderData } from 'react-router-typesafe';

import type { championsListLoader } from 'utils/route_loaders';

import { Title } from 'ui/typography';

export const ChampionsList = () => {
  const data = useLoaderData() as LoaderData<typeof championsListLoader>;

  const championList: JSX.Element[] = [];
  for (const champ of data.champions) {
    if (champ.numPicks === 0 && champ.numBans === 0) {
      continue;
    }

    championList.push(
      <div key={champ.key}>
        <div>{champ.championName}</div>
        <div>
          Winrate: {(champ.winRate * 100).toFixed(2)} ({champ.numWins} / {champ.numPicks})
        </div>
        <div>Number of bans: {champ.numBans}</div>
      </div>
    );
  }

  return (
    <div>
      <Title>Champions List</Title>
      {championList}
    </div>
  );
};
