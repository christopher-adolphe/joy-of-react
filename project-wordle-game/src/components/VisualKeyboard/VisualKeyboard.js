import React from 'react';

import { KEYBOARD_LETTERS } from '../../constants';

function VisualKeyboard({ items }) {
  const [ letters, setLetters ] = React.useState(() => KEYBOARD_LETTERS.map(letter => ({
    id: window.crypto.randomUUID(),
    keyValue: letter,
    status: 'unused',
  })));

  React.useEffect(() => {
    if (items.length) {
      items.forEach(({ validatedGuess }) => {
        validatedGuess.forEach(({ letter, status }) => {
          setLetters(previousLetters => {
            const nextLetters = [ ...previousLetters ];
            const letterToUpdateIndex = nextLetters.findIndex(keyboardLetter => keyboardLetter.keyValue === letter);
  
            nextLetters[letterToUpdateIndex] = { ...nextLetters[letterToUpdateIndex], status };
  
            return nextLetters;
          });
        });
      });
    } else {
      setLetters(previousLetters => {
        const nextLetters = [ ...previousLetters ];

        return nextLetters.map(letter => ({ ...letter, status: 'unused' }));
      });
    }
  }, [items]);

  return (
    <div className='visual-keyboard'>
      {
        letters.map(({ id, keyValue, status }) => (
          <div className={ `visual-keyboard__key ${status}`} key={ id }>{ keyValue }</div>
        ))
      }
    </div>
  );
}

export default VisualKeyboard;
