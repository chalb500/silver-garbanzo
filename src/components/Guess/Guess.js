import React from 'react';

function Guess({ guess }) {
  if (guess) {
    const letters = [...guess];
    return <p className="guess">
      {
        letters.map(letter => {
          return <span className="cell">
            {letter}
          </span>
        })
      }
    </p>
  }
}

export default Guess;
