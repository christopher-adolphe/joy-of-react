import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessForm({ onSetGuessList }) {
  const [ guess, setGuess ] = React.useState('');
  const [ isDisabled, setIsDisabled ] = React.useState(false);

  function handleGuessInput(event) {
    let nextGuess = '';

    nextGuess = event.target.value;

    if (nextGuess.length > 5) {
      return;
    }

    nextGuess = nextGuess.toUpperCase();

    setGuess(nextGuess);
  }

  function handleSubmitGuess(event) {
    event.preventDefault();

    if (guess === '') {
      return;
    }

    console.log('handleSubmitGuess called: ', guess);
    
    onSetGuessList(prevGuessList => {
      const updatedGuesslist = [ ...prevGuessList ];

      updatedGuesslist.push({
        id: window.crypto.randomUUID(),
        guess
      });

      if (updatedGuesslist.length === NUM_OF_GUESSES_ALLOWED) {
        setIsDisabled(true);
      }

      return updatedGuesslist;
    });

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
        disabled={ isDisabled }
      />
    </form>
  );
}

export default GuessForm;
