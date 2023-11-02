import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Player } from './Player';
import { playerIds } from './matches/players';
import { matchesS1 } from './matches/s1';
import { Match } from './Match';
import { PlayerPair } from './PlayerPair';

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

  for (const matchDto of matchesS1) {
    const match = new Match(matchDto);
    match.updatePlayerData(players, playerPairs);
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
