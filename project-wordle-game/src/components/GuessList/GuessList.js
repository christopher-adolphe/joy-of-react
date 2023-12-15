import React from 'react';

import Guess from '../Guess';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessList({ items }) {
  return (
    <div className="guess-results">
      {
        range(NUM_OF_GUESSES_ALLOWED).map(num => (
          <Guess key={ num } word={ items[num]?.guess } />
        ))
      }
    </div>
  );
}

export default GuessList;
