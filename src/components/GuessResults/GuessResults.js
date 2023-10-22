import React from 'react';

function GuessResults({ prevGuesses }) {
  return (
    <div className="guess-results">
      {prevGuesses.map(({ id, label }) => (
        <p key={id} className="guess">
          {label}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
