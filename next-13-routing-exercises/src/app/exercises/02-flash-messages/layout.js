import React from 'react';

import ToasProvider from '../../../components/ToastProvider';
import ToastShelf from '../../../components/ToastShelf';

import './styles.css';

function FlashMsgLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToasProvider>
          {children}

          <ToastShelf />
        </ToasProvider>
      </body>
    </html>
  );
}

export default FlashMsgLayout;
