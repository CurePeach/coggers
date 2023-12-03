import * as React from 'react';
import { useParams } from 'react-router-dom';
import { LoaderData, useLoaderData } from 'react-router-typesafe';

import { PlayerStore } from 'player/player_store';
import { ErrorPage } from 'routes/error_page';
import { Title } from 'ui/base/typography';
import type { playerProfileLoader } from 'utils/route_loaders';

export const PlayerProfile = () => {
  const data = useLoaderData() as LoaderData<typeof playerProfileLoader>;
  const params = useParams();

  const rawPlayerId = params.playerId;
  let player: PlayerStore;
  try {
    const playerId = Number(rawPlayerId);
    player = data.players[playerId];
    if (player === undefined) {
      throw Error;
    }
  } catch (error) {
    console.error(`Cannot find player with ID: ${rawPlayerId}`);
    return <ErrorPage />;
  }

  return (
    <div>
      <Title>{player.playerName}</Title>
    </div>
  );
};
