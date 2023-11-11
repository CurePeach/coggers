import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { championIds } from 'data/champions';
import { playerIds } from 'data/players';
import { matchesS1 } from 'data/s1';

import { updateChampionData, updatePlayerData, updatePlayerPairData } from 'utils/match_helpers';

import { ChampionStore } from 'champion/champion_store';
import { MatchPresenter } from 'match/match_presenter';
import { MatchStore } from 'match/match_store';
import { PlayerStore } from 'player/player_store';
import { PlayerPairStore } from 'player_pair/player_pair_store';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

const players: PlayerStore[] = [];

const playerPairs: PlayerPairStore[] = [];
playerIds.forEach((id, index) => {
  players.push(new PlayerStore(id));

  const otherIds = playerIds.slice(index + 1);
  for (const id2 of otherIds) {
    playerPairs.push(new PlayerPairStore(id, id2));
  }
});

const champions: ChampionStore[] = [];
championIds.forEach((id) => {
  champions.push(new ChampionStore(id));
});

const matchPresenter = new MatchPresenter();
const seasonOne: MatchStore[] = [];
for (const matchDto of matchesS1) {
  const match = matchPresenter.createMatchStore(matchDto);
  seasonOne.push(match);

  updatePlayerData(match, players);
  updatePlayerPairData(match, playerPairs);
  updateChampionData(match, champions);
}

for (const player of players) {
  if (player.numGames > 0) {
    player.print();
  }
}

for (const pair of playerPairs) {
  if (pair.numGames > 0) {
    pair.print();
  }
}

for (const champ of champions) {
  if (champ.numPicks > 0 || champ.numBans > 0) {
    champ.print();
  }
}
