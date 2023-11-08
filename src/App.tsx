import React from 'react';

import { championIds } from 'data/champions';
import { playerIds } from 'data/players';
import { matchesS1 } from 'data/s1';

import { ChampionStore } from 'champion/champion_store';
import { MatchStore } from 'match/match_store';
import { Player } from 'player/player_store';
import { PlayerPair } from 'player_pair/player_pair_store';

import './App.css';
import logo from './logo.svg';

function App() {
  const players: Player[] = [];
  const playerPairs: PlayerPair[] = [];
  playerIds.forEach((id, index) => {
    players.push(new Player(id));

    const otherIds = playerIds.slice(index + 1);
    for (const id2 of otherIds) {
      playerPairs.push(new PlayerPair(id, id2));
    }
  });

  const champions: ChampionStore[] = [];
  championIds.forEach((id) => {
    champions.push(new ChampionStore(id));
  });

  for (const matchDto of matchesS1) {
    const match = new MatchStore(matchDto);
    match.updatePlayerData(players, playerPairs);
    match.updateChampionData(champions);
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
