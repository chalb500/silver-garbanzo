import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../../components/Guess'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log({ answer });

function Game() {
  // Guess state
  const [guess, setGuess] = React.useState('');

  return <Guess 
      guess={guess} 
      setGuess={setGuess} 
    />
}

export default Game;
