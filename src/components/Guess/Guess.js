import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Cell({letter, status}) {
  if (letter) {
    return <span 
      className={`cell ${status}`}>
      {letter}
    </span> 
  }
}

function Guess({ guess, answer }) {
  if (guess) {

    const results = checkGuess(guess, answer);

    return <p className="guess">
      {
        range(5)
        .map(number => 
          <Cell 
            key={number}
            letter={results[number].letter}
            status={results[number].status}
          />
        )
      }
    </p>
  }
}

export default Guess;
