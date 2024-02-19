import React from 'react';
import Link from 'next/link';

function ScreenSaverExercise() {
  const COLORS = [
    'purple',	
    'fuchsia',	
    'green',	
    'lime',	
    'olive',	
    'yellow',	
    'navy'
  ];

  return (
    <main className="screen-saver-wrapper">
      <h3>Choose your color:</h3>
      <ul>
        {
          COLORS.map(color => (
            <li key={ color }>
              <Link href={ `/exercises/01-screensaver/${color} `}>{ color }</Link>
            </li>
          ))
        }
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
