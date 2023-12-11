import { makeLoader } from 'react-router-typesafe';

import { ChampionStore } from 'champion/champion_store';
import { championIds } from 'data/champions';
import { playerIds } from 'data/players';
import { matchesS1 } from 'data/s1';
import { matchesS2 } from 'data/s2';
import { matchesS3 } from 'data/s3';
import { MatchPresenter } from 'match/match_presenter';
import { MatchStore } from 'match/match_store';
import { PlayerStore } from 'player/player_store';
import { PlayerPairStore } from 'player_pair/player_pair_store';
import { updateChampionData, updatePlayerData, updatePlayerPairData } from 'utils/match_helpers';

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

const seasonTwo: MatchStore[] = [];
for (const matchDto of matchesS2) {
  const match = matchPresenter.createMatchStore(matchDto);
  seasonTwo.push(match);

  updatePlayerData(match, players);
  updatePlayerPairData(match, playerPairs);
  updateChampionData(match, champions);
}

const seasonThree: MatchStore[] = [];
for (const matchDto of matchesS3) {
  const match = matchPresenter.createMatchStore(matchDto);
  seasonThree.push(match);

  updatePlayerData(match, players);
  updatePlayerPairData(match, playerPairs);
  updateChampionData(match, champions);
}

const allMatches = seasonOne.concat(seasonTwo).concat(seasonThree);

export const championsListLoader = makeLoader(() => {
  return { champions: champions, players: players, playerPairs: playerPairs, matches: allMatches };
});

export const championProfileLoader = makeLoader(() => {
  return { champions: champions, players: players, playerPairs: playerPairs, matches: allMatches };
});

export const playerPairsLoader = makeLoader(() => {
  return { champions: champions, players: players, playerPairs: playerPairs, matches: allMatches };
});

export const playerProfileLoader = makeLoader(() => {
  return { champions: champions, players: players, playerPairs: playerPairs, matches: allMatches };
});

export const playersListLoader = makeLoader(() => {
  return { champions: champions, players: players, playerPairs: playerPairs, matches: allMatches };
});

export const matchProfileLoader = makeLoader(() => {
  return { champions: champions, players: players, playerPairs: playerPairs, matches: allMatches };
});

export type Page = 'matches' | 'champions' | 'players' | 'pairs';

export type OutletContext = {
  currentPage: Page | undefined;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page | undefined>>;
};
