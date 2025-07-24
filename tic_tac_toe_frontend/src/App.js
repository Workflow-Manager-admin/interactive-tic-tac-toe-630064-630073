import React from 'react';
import Game from './components/Game';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="App">
      <div className="game-container">
        <h1>Tic Tac Toe</h1>
        <Game />
      </div>
    </div>
  );
}

export default App;
