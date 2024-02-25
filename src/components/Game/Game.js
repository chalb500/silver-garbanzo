import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../../components/GuessInput';
import GuessResults from '../../components/GuessResults';
import WonBanner from '../../components/WonBanner';
import LostBanner from '../../components/LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log({ answer });

function Game() {
  // Guess state
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [tentativeGuess, ...guesses];

    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    }
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return <>
    <GuessResults 
      guesses={guesses}
      answer={answer}
    />
    <GuessInput 
      handleSubmitGuess={handleSubmitGuess}
      gameStatus={gameStatus}
    />
    {
      gameStatus === 'won' && (
        <WonBanner numOfGuesses={guesses.length} />
      )
    }
    {
      gameStatus === 'lost' && (
        <LostBanner answer={answer} />
      )
    }
  </>
}

export default Game;
