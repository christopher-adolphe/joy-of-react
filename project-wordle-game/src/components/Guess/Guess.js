import React from 'react';

import { range } from '../../utils';

function Guess({ word = [] }) {
  const statusClasses = new Map([
    [ 'correct', 'correct' ],
    [ 'misplaced', 'misplaced' ],
    [ 'incorrect', 'incorrect' ],
  ]);
  
  return (
    <p className="guess">
      {
        range(5).map(num => word.length > 0 ? (
            <span key={ num } className={ `cell ${statusClasses.get(word[num].status)}` }>{ word[num].letter }</span>
          ) : (
            <span key={ num } className="cell"></span>
          )
        )
      }
    </p>
  );
}

export default Guess;
