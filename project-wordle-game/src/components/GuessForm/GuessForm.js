import React from 'react';

function GuessForm({ isGameOver, onSubmitGuess }) {
  const [ guess, setGuess ] = React.useState('');

  function handleGuessInput(event) {
    let nextGuess = '';

    nextGuess = event.target.value.trim();

    if (nextGuess.length > 5  || !isNaN(parseInt(nextGuess))) {
      return;
    }

    nextGuess = nextGuess.toUpperCase();

    setGuess(nextGuess);
  }

  function handleSubmitGuess(event) {
    event.preventDefault();

    if (guess === '' || guess.length !== 5) {
      return;
    }
    
    onSubmitGuess(guess);

    setGuess('');
  }

  return (
    <form
      onSubmit={ handleSubmitGuess }
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={ guess }
        onInput={ handleGuessInput }
        disabled={ isGameOver }
        required
        minLength={ 5 }
        maxLength={ 5 }
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessForm;
