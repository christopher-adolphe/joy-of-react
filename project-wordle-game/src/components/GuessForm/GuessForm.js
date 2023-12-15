import React from 'react';

function GuessForm({ onSetGuessList }) {
  const [ guess, setGuess ] = React.useState('');

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
      />
    </form>
  );
}

export default GuessForm;
