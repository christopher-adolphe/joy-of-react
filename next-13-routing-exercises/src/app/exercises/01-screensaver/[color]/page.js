import React from 'react';

import ScreenSaver from '../../../../components/ScreenSaver/ScreenSaver';

function CustomScreenSaver({ params }) {
  const { color } = params;

  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={ color } />
    </main>
  );
}

const COLORS = [
  'purple',	
  'fuchsia',	
  'green',	
  'lime',	
  'olive',	
  'yellow',	
  'navy'
];

export function generateStaticParams() {
  return COLORS.map(color => ({ color }));
}

export default CustomScreenSaver;