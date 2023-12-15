import React from 'react';

import GuessForm from '../GuessForm';
import GuessList from '../GuessList';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [ guessList, setGuessList ] = React.useState([]);

  return <>
    <GuessList items={ guessList } />
    <GuessForm onSetGuessList={ setGuessList } />
  </>;
}

export default Game;
