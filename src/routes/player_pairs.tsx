import * as React from 'react';
import { useOutletContext } from 'react-router-dom';
import { LoaderData, useLoaderData } from 'react-router-typesafe';

import type { OutletContext, playerPairsLoader } from 'utils/route_loaders';

export const PlayerPairs = () => {
  const { setCurrentPage } = useOutletContext<OutletContext>();
  setCurrentPage('pairs');

  const data = useLoaderData() as LoaderData<typeof playerPairsLoader>;

  const pairsList: JSX.Element[] = [];
  for (const pair of data.playerPairs) {
    if (pair.numGames === 0) {
      continue;
    }

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
