import React from 'react';

import { range } from '../../utils';

function Guess({ word = '' }) {
  return (
    <p className="guess">
      {
        range(5).map(num => word.length > 0 ? (
            <span key={ num } className="cell">{ word[num] }</span>
          ) : (
            <span key={ num } className="cell"></span>
          )
        )
      }
    </p>
  );
}

export default Guess;
