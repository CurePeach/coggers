import * as React from 'react';
import { LoaderData, useLoaderData } from 'react-router-typesafe';

import { convert } from 'data/champions';

import type { playersListLoader } from 'utils/route_loaders';

import { Subheading, Title } from 'ui/typography';

export const PlayersList = () => {
  const data = useLoaderData() as LoaderData<typeof playersListLoader>;

  const playersList: JSX.Element[] = [];
  for (const player of data.players) {
    if (player.numGames === 0) {
      continue;
    }

    const champList: string[] = player.scores
      .map((score) => {
        return convert(score.champion);
      })
      .filter((value, index, self) => {
        return index === self.indexOf(value);
      });

    playersList.push(
      <div key={player.key}>
        <Subheading>{player.playerName}</Subheading>
        <div>
          Winrate: {(player.winRate * 100).toFixed(2)} ({player.numWins} / {player.numGames})
        </div>
        <div>Champions played: {champList.join(', ')}</div>
      </div>
    );
  }

  return (
    <div>
      <Title>Players List</Title>
      {playersList}
    </div>
  );
};
