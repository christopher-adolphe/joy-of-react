'use client';

import React from 'react';

function CodeSnippet({ children }) {
  const [ isShown, setIsShown ] = React.useState(false);

  return isShown ? (
    <div>
      { children }
    </div>
  ) : (
    <div className="reveal">
      <button
        onClick={() =>
          setIsShown(true)
        }
      >
        Reveal Content
      </button>
    </div>
  );
}

export default CodeSnippet;
