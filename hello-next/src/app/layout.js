import React from 'react';

import StyledComponentsRegistry from '../components/StyledComponentsRegistry';
import './styles.css';

function RootLayout({ children }) {
  const timestamp = new Date().toLocaleString();

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>

        <footer>
          Page rendered on { timestamp }
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
