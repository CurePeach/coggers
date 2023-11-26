import { ChampionStore } from 'champion/champion_store';
import { ChampionName } from 'data/champions';
import { PlayerName } from 'data/players';
import { MatchStore } from 'match/match_store';
import { PlayerStore } from 'player/player_store';
import { PlayerPairStore } from 'player_pair/player_pair_store';
import { ScoreStore } from 'score/score_store';

export const updatePlayerData = (match: MatchStore, players: PlayerStore[]) => {
  const winningPlayers = getPlayerNames(match.winningTeam);
  const losingPlayers = getPlayerNames(match.losingTeam);
  const allPlayers = winningPlayers.concat(losingPlayers);

  const presentPlayers = players.filter((player) => allPlayers.includes(player.key));
  for (const player of presentPlayers) {
    if (player.key === match.mvp) {
      player.numMvps += 1;
    } else if (player.key === match.ace) {
      player.numAces += 1;
    }
  }

  const gameData = match.blueTeam.concat(match.redTeam);
  for (const data of gameData) {
    const player = presentPlayers.find((player) => player.key === data.player);
    if (player) {
      player?.scores.push(data);
    } else {
      console.error(`Error: cannot find player named ${data.player}`);
    }
  }
};

export const updatePlayerPairData = (match: MatchStore, playerPairs: PlayerPairStore[]) => {
  const winningPlayers = getPlayerNames(match.winningTeam);
  const winningPairs = playerPairs.filter(
    (pair) => winningPlayers.includes(pair.keys[0]) && winningPlayers.includes(pair.keys[1])
  );
  const losingPlayers = getPlayerNames(match.losingTeam);
  const losingPairs = playerPairs.filter(
    (pair) => losingPlayers.includes(pair.keys[0]) && losingPlayers.includes(pair.keys[1])
  );
  const allPairs = winningPairs.concat(losingPairs);

  const gameData = match.blueTeam.concat(match.redTeam);
  for (const pair of allPairs) {
    const playerOne = gameData.find((data) => data.player === pair.keys[0]);
    const playerTwo = gameData.find((data) => data.player === pair.keys[1]);
    if (playerOne && playerTwo) {
      pair.scoresTogether.push([playerOne, playerTwo]);
    } else {
      console.error(`Error: cannot find data for player ${pair.keys[0]} or ${pair.keys[1]}`);
    }
  }
};

export const updateChampionData = (match: MatchStore, champions: ChampionStore[]) => {
  const winningChamps = getChampionNames(match.winningTeam);
  const losingChamps = getChampionNames(match.losingTeam);
  const allChamps = winningChamps.concat(losingChamps);

  const presentChamps = champions.filter((champ) => allChamps.includes(champ.key));
  const gameData = match.blueTeam.concat(match.redTeam);
  for (const data of gameData) {
    const champ = presentChamps.find((champ) => champ.key === data.champion);
    if (champ) {
      champ?.scores.push(data);
    } else {
      console.error(`Error: cannot find champion named ${data.champion}`);
    }
  }

  const allBans = match.draft.bans.blue.concat(match.draft.bans.red);
  const bannedChampNames: ChampionName[] = [];
  for (const bans of allBans) {
    for (const champ of bans) {
      bannedChampNames.push(champ);
    }
  }
  const bannedChamps = champions.filter((champ) => bannedChampNames.includes(champ.key));
  for (const champ of bannedChamps) {
    champ.bans.push(match.id);
  }
};

const getPlayerNames = (team: ScoreStore[]) => {
  const names: PlayerName[] = [];
  for (const score of team) {
    names.push(score.player);
  }
  return names;
};

const getChampionNames = (team: ScoreStore[]) => {
  const names: ChampionName[] = [];
  for (const score of team) {
    names.push(score.champion);
  }
  return names;
};
