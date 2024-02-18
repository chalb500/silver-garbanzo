import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../../components/GuessInput';
import GuessResults from '../../components/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log({ answer });

function Game() {
  // Guess state
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([tentativeGuess, ...guesses]);
  }

  return <>
    <GuessResults 
      guesses={guesses}
    />
    <GuessInput 
      handleSubmitGuess={handleSubmitGuess}
    />
  </>
}

export default Game;
