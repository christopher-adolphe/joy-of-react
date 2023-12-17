import React from 'react';

function Banner({ variant = 'happy', children }) {
  const variantClasses = new Map([
    [ 'happy', 'happy' ],
    [ 'sad', 'sad' ]
  ]);
  
  return (
    <div className={ `banner ${variantClasses.get(variant)}` }>
      { children }
    </div>
  );
}

export default Banner;
