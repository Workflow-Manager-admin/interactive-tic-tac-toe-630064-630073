import React from 'react';

// PUBLIC_INTERFACE
const Board = ({ squares, onClick }) => {
  return (
    <div className="game-board">
      {squares.map((square, i) => (
        <button key={i} className="square" onClick={() => onClick(i)}>
          {square}
        </button>
      ))}
    </div>
  );
};

export default Board;
