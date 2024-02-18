import React from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event){
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');
  }

  return <div>
    <form 
      className="guess-input-wrapper" 
      onSubmit={ event => handleSubmit(event) }
    >
      <label>Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        minLength={5}
        maxLength={5}
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  </div>;
}

export default GuessInput;
