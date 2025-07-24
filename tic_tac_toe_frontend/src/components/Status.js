import React from 'react';

// PUBLIC_INTERFACE
const Status = ({ winner, isXNext, squares }) => {
  const isDraw = !winner && squares.every(square => square !== null);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Game is a draw!";
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  return <div className="game-status">{status}</div>;
};

export default Status;
