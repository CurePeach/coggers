import * as React from 'react';
import { LoaderData, useLoaderData } from 'react-router-typesafe';

import type { playerPairsLoader } from 'utils/route_loaders';

export const PlayerPairs = () => {
  const data = useLoaderData() as LoaderData<typeof playerPairsLoader>;

  const pairsList: JSX.Element[] = [];
  for (const pair of data.playerPairs) {
    pairsList.push(
      <div key={pair.firstPlayer + pair.secondPlayer}>
        <div>
          {pair.firstPlayer} and {pair.secondPlayer}
        </div>
        <div>
          Winrate: {(pair.winRate * 100).toFixed(2)} ({pair.numWins} / {pair.numGames})
        </div>
      </div>
    );
  }

  return <div>{pairsList}</div>;
};
