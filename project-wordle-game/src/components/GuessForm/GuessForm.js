import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function GuessForm({ answer, onSetGuessList }) {
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

    if (guess === '' || guess.length !== 5) {
      return;
    }

    console.log('handleSubmitGuess called: ', guess);
    
    onSetGuessList(prevGuessList => {
      const updatedGuesslist = [ ...prevGuessList ];

      const validatedGuess = checkGuess(guess, answer);

      updatedGuesslist.push({
        id: window.crypto.randomUUID(),
        validatedGuess
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
