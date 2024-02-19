'use client';

import React from 'react';

export const SoundContext = React.createContext({
  isSoundEnabled: false,
  handleToggleSound: () => {},
});

function SoundProvider({ children }) {
  const [ isSoundEnabled, setIsSoundEnabled ] = React.useState(true);

  function handleToggleSound() {
    setIsSoundEnabled(!isSoundEnabled);
  }

  const soundContextValue = {
    isSoundEnabled,
    handleToggleSound
  }

  return (
    <SoundContext.Provider value={ soundContextValue }>
      { children }
    </SoundContext.Provider>
  );
}

export default SoundProvider;
