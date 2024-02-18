import React from 'react';

function Guess({ guess, setGuess }) {
  return <div>
    <form 
      className="guess-input-wrapper" 
      onSubmit={ event => 
        {
          event.preventDefault();
          let value = guess.toUpperCase();
          console.log(value);
          value = '';
          setGuess(value);
        }
      }
    >
      <label>Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        value={guess}
        onChange={event => 
          {
            event.preventDefault();
            setGuess(event.target.value);
          }
        }
      />
    </form>
  </div>;
}

export default Guess;
