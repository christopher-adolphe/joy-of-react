'use client';
import React from 'react';

import Spinner from '../Spinner';

function Counter() {
  const [count, setCount] = React.useState(null);

  /**
   * Instead of initialising the state variable with the
   * value from the localStorage. We move this logic to a
   * useEffect hook and run it on mount which will happen
   * on the client side during hydration. So at this point
   * in time, the `window` object will be accessible. With
   * this approach we are avoiding hydration mismatch.
  */
  React.useEffect(() => {
    const savedCount = window.localStorage.getItem('saved-count');

    setCount(savedCount ? Number(savedCount) : 0);
  }, []);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('saved-count', count);
    }
  }, [count]);

  return (
    <button
      className="count-btn"
      onClick={() => setCount(count + 1)}
    >
      Count:{' '}
      { typeof count === 'number' ? count : <Spinner /> }
    </button>
  );
}

export default Counter;
