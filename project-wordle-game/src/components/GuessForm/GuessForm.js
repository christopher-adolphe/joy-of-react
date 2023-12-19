import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function GuessForm({ answer, isGameOver, onSetGame, onSetGuessList }) {
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
    
    onSetGuessList(prevGuessList => {
      const updatedGuesslist = [ ...prevGuessList ];

      const validatedGuess = checkGuess(guess, answer);
      const isGuessCorrect = guess === answer;

      updatedGuesslist.push({
        id: window.crypto.randomUUID(),
        validatedGuess
      });

      if (updatedGuesslist.length <= NUM_OF_GUESSES_ALLOWED && isGuessCorrect) {
        onSetGame({ isGameOver: true, status: 'win' });
      }

      if (updatedGuesslist.length === NUM_OF_GUESSES_ALLOWED) {
        onSetGame({ isGameOver: true, status: 'lose' });
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
        disabled={ isGameOver }
        required
        minLength={ 5 }
        maxLength={ 5 }
      />
    </form>
  );
}

export default GuessForm;
