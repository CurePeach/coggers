import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Player } from './Player';
import { playerIds } from './matches/players';
import { matchesS1 } from './matches/s1';
import { Match } from './Match';
import { PlayerPair } from './PlayerPair';
import { championIds } from './matches/champions';
import { Champion } from './Champion';

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

  const champions: Champion[] = [];
  championIds.forEach((id) => {
    champions.push(new Champion(id));
  });

  for (const matchDto of matchesS1) {
    const match = new Match(matchDto);
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
    if (champ.numGames > 0 || champ.numBans > 0) {
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
