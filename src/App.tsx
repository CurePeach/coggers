import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Player } from './Player';
import { playerNames } from './matches/players';
import { matchesS1 } from './matches/s1';
import { Match } from './Match';

function App() {
  const players: Player[] = [];
  playerNames.forEach((key, value) => {
    players.push(new Player(value));
  });

  for (const matchDto of matchesS1) {
    const match = new Match(matchDto);
    match.updatePlayerData(players);
  }

  for (const player of players) {
    if (player.numGames > 0) {
      player.print();
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
