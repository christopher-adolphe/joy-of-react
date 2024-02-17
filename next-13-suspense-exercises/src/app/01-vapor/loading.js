import React from 'react';

import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';

import { range } from '@/utils';

function Loading() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>

      <div className="game-grid">
        {
          range(0, 12).map(num => (
            <LibraryGameCardSkeleton key={num}/>
          ))
        }
      </div>
    </section>
  );
}

export default Loading;
