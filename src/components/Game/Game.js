import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [prevGuesses, setPrevGuesses] = React.useState([]);

  return (
    <>
      <GuessResults prevGuesses={prevGuesses} />
      <GuessInput prevGuesses={prevGuesses} setPrevGuesses={setPrevGuesses} />
    </>
  );
}

export default Game;
