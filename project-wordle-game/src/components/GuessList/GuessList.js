import React from 'react';

function GuessList({ items }) {
  return (
    <div className="guess-results">
      {
        items.length > 0 ? (
          items.map(({ id, guess }) => (
            <p key={ id } className="guess">{ guess }</p>
          ))
        ) : null
      }
    </div>
  );
}

export default GuessList;
