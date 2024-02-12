'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Interview from './Interview';
import './styles.css';

function InterviewExercise() {
  const [ isDesktop, setIsDesktop ] = React.useState(true);

  React.useEffect(() => {
    function handleWindowResize(event) {
      const { innerWidth } = event.target;
      
      if (innerWidth < 500) {
        setIsDesktop(false);

        return;
      }

      setIsDesktop(true);
    }
    
    window.addEventListener('resize', handleWindowResize);
    
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <main>
      <Interview />
      {isDesktop && (
        <aside>
          <img
            src="/gwen-artist.png"
            alt="Portrait of the artist"
          />
          <h2>About the Artist</h2>
          <p>
            Gwen Altaria is a contemporary artist known for
            her unique blend of traditional oil painting
            techniques and pop culture references. Born and
            raised in London, England, Vivi had an early
            love for both the fine arts and the fantastical
            worlds of video games.
          </p>
        </aside>
      )}
    </main>
  );
}

export default InterviewExercise;
