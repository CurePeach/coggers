import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ChampionProfile } from 'routes/champion_profile';
import { ChampionsList } from 'routes/champions_list';
import { ErrorPage } from 'routes/error_page';
import { MatchProfile } from 'routes/match_profile';
import { PlayerProfile } from 'routes/player_profile';
import { PlayersList } from 'routes/players_list';

import {
  championProfileLoader,
  championsListLoader,
  matchProfileLoader,
  playerProfileLoader,
  playersListLoader,
} from 'utils/route_loaders';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'champion/:championId',
        element: <ChampionProfile />,
        loader: championProfileLoader,
      },
      {
        path: 'champions',
        element: <ChampionsList />,
        loader: championsListLoader,
      },
      {
        path: 'match/:matchId',
        element: <MatchProfile />,
        loader: matchProfileLoader,
      },
      {
        path: 'player/:playerId',
        element: <PlayerProfile />,
        loader: playerProfileLoader,
      },
      {
        path: 'players',
        element: <PlayersList />,
        loader: playersListLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
