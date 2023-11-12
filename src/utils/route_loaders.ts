import { makeLoader } from 'react-router-typesafe';

import { championIds } from 'data/champions';
import { playerIds } from 'data/players';
import { matchesS1 } from 'data/s1';

import { updateChampionData, updatePlayerData, updatePlayerPairData } from 'utils/match_helpers';

import { ChampionStore } from 'champion/champion_store';
import { MatchPresenter } from 'match/match_presenter';
import { MatchStore } from 'match/match_store';
import { PlayerStore } from 'player/player_store';
import { PlayerPairStore } from 'player_pair/player_pair_store';

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

for (const pair of playerPairs) {
  if (pair.numGames > 0) {
    pair.print();
  }
}

export const championsListLoader = makeLoader(() => {
  return { champions: champions, players: players, playerPairs: playerPairs, matches: seasonOne };
});

export const championProfileLoader = makeLoader(() => {
  return { champions: champions, players: players, playerPairs: playerPairs, matches: seasonOne };
});

export const playerProfileLoader = makeLoader(() => {
  return { champions: champions, players: players, playerPairs: playerPairs, matches: seasonOne };
});

export const playersListLoader = makeLoader(() => {
  return { champions: champions, players: players, playerPairs: playerPairs, matches: seasonOne };
});

export const matchProfileLoader = makeLoader(() => {
  return { champions: champions, players: players, playerPairs: playerPairs, matches: seasonOne };
});
