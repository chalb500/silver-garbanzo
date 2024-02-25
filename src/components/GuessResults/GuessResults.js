import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResults({ guesses, answer }) {
  return <div className="guessResults">
    {
      range(0, NUM_OF_GUESSES_ALLOWED)
      .map(number => {
        let guess = guesses[number];
        return <Guess 
          key={number} 
          guess={guess}
          answer={answer}
        />
      })
    }
  </div>
}

export default GuessResults;
