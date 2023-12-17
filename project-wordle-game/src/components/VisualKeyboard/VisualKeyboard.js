import React from 'react';

import { KEYBOARD_LETTERS } from '../../constants';

function VisualKeyboard() {
  const [ letters, setLetters ] = React.useState(() => KEYBOARD_LETTERS.map(letter => ({
    id: window.crypto.randomUUID(),
    boardKey: letter,
    status: 'unused',
  })));

  console.info('letters: ', letters);
  return (
    <div className='visual-keyboard'>
      {
        letters.map(({ id, boardKey }) => (
          <div className='visual-keyboard__key' key={ id }>{ boardKey }</div>
        ))
      }
    </div>
  );
}

export default VisualKeyboard;
