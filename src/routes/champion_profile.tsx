import * as React from 'react';
import { useParams } from 'react-router-dom';
import { LoaderData, useLoaderData } from 'react-router-typesafe';

import type { championProfileLoader } from 'utils/route_loaders';

export const ChampionProfile = () => {
  const data = useLoaderData() as LoaderData<typeof championProfileLoader>;
  const params = useParams();

  const id = Number(params.championId);
  if (isNaN(id)) {
    return <div>Please provide a valid champion ID.</div>;
  }

  const champ = data.champions[id];

  return (
    <div>
      <div>Champion Profile: {champ.championName}</div>
      <div>Number of bans: {champ.numBans}</div>
      <div>Number of picks: {champ.numPicks}</div>
      <div>Winrate: {champ.winRate}%</div>
    </div>
  );
};
