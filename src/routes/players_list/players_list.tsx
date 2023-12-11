import * as React from 'react';
import { LoaderData, useLoaderData } from 'react-router-typesafe';

import { Container } from 'ui/base/container/container';
import { Title } from 'ui/base/typography';
import type { playersListLoader } from 'utils/route_loaders';

import { PlayerRow } from './ui/player_row';

export const PlayersList = () => {
  const data = useLoaderData() as LoaderData<typeof playersListLoader>;

  const playersList: JSX.Element[] = [];
  for (const player of data.players) {
    if (player.numGames === 0) {
      continue;
    }

    playersList.push(<PlayerRow key={player.key} player={player} />);
  }

  return (
    <div>
      <Title>Players List</Title>
      <Container width="auto" display="flex" flexDirection="column" alignItems="center">
        {playersList}
      </Container>
    </div>
  );
};
