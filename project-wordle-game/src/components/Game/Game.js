import React from 'react';

import GuessForm from '../GuessForm';
import GuessList from '../GuessList';
import GameOverBanner from '../GameOverBanner';
import VisualKeyboard from '../VisualKeyboard';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [ answer, setAnswer ] = React.useState(() => sample(WORDS));
  const [ guessList, setGuessList ] = React.useState([]);
  const [ game, setGame ] = React.useState({ isGameOver: false, status: '' });

  console.info({ answer });

  const bannerConfigs = new Map([
    [ 'win', {
      variant: 'happy',
      content: (
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{ `${guessList.length > 1 ? `${guessList.length} guesses` : '1 guess'}` }</strong>.
        </p>
      )
    } ],
    [ 'lose', {
      variant: 'sad',
      content: (
        <p>Sorry, the correct answer is <strong>{ answer }</strong>.</p>
      )
    } ]
  ]);

  function handleSubmitGuess(tentativeGuess) {
    const updatedGuesslist = [ ...guessList ];

    const validatedGuess = checkGuess(tentativeGuess, answer);
    const isGuessCorrect = tentativeGuess === answer;

    updatedGuesslist.push({
      id: window.crypto.randomUUID(),
      validatedGuess
    });

    if (updatedGuesslist.length <= NUM_OF_GUESSES_ALLOWED && isGuessCorrect) {
      setGame({ isGameOver: true, status: 'win' });
    }

    if (updatedGuesslist.length === NUM_OF_GUESSES_ALLOWED) {
      setGame({ isGameOver: true, status: 'lose' });
    }

    setGuessList(updatedGuesslist);
  }

  function handleRestartGame() {
    const nextAnswer = sample(WORDS);

    setAnswer(nextAnswer);
    setGuessList([]);
    setGame({ isGameOver: false, status: '' });
  }

  return <>
    <GuessList items={ guessList } />

    <GuessForm
      isGameOver={ game.isGameOver }
      onSubmitGuess={ handleSubmitGuess }
    />

    <VisualKeyboard items={ guessList } />

    {
      game.isGameOver && (
        <GameOverBanner variant={ bannerConfigs.get(game.status).variant }>
          {
            bannerConfigs.get(game.status).content
          }

          <button type='button' className='banner-btn' onClick={ handleRestartGame }>Restart Game</button>
        </GameOverBanner>
      )
    }
  </>;
}

export default Game;
