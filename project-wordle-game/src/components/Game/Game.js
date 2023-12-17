import React from 'react';

import GuessForm from '../GuessForm';
import GuessList from '../GuessList';
import GameOverBanner from '../GameOverBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

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
          <strong>Congratulations!</strong> Got it in <strong>{ `${guessList.length} ${guessList.length > 1 ? 'guesses' : 'guess'}` }</strong>.
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

  function handleRestartGame() {
    const nextAnswer = sample(WORDS);

    setAnswer(nextAnswer);
    setGuessList([]);
    setGame({ isGameOver: false, status: '' });
  }

  return <>
    <GuessList items={ guessList } />

    <GuessForm
      answer={ answer }
      isGameOver={ game.isGameOver }
      onSetGame={ setGame }
      onSetGuessList={ setGuessList }
    />

    {
      game.isGameOver ? (
        <GameOverBanner variant={ bannerConfigs.get(game.status).variant }>
          {
            bannerConfigs.get(game.status).content
          }

          <button type='button' className='banner-btn' onClick={ handleRestartGame }>Restart Game</button>
        </GameOverBanner>
      ) : null
    }
  </>;
}

export default Game;
