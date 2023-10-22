import React from 'react';

function GuessInput({ prevGuesses, setPrevGuesses }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });

    const nextPrevGuess = {
      label: guess,
      id: Math.random(),
    };

    const nextPrevGuesses = [...prevGuesses, nextPrevGuess];
    setPrevGuesses(nextPrevGuesses);

    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
