import React from 'react';

const Score = ({ score, onNextQuestion }) => {
  return (
    <div>
      <h2 className='result'>Results:-</h2>
      <h4 className='result-score'>Your score: {score}</h4>
    </div>
  );
};

export default Score;
