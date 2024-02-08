import React from 'react';
import { createPortal } from 'react-dom';

import { ToastContext } from '../ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastList } = React.useContext(ToastContext);

  return createPortal(
    <>
    {
      toastList.length > 0 && (
        <ol role="region" aria-live="polite" aria-label="Notification" className={styles.wrapper}>
          {
            toastList.map(({ id, message, variant }) => (
              <li key={ id } className={styles.toastWrapper}>
                <Toast id={ id } variant={ variant }>{ message }</Toast>
              </li>
            ))
          }
        </ol>
      )
    }
    </>,
    document.querySelector('#toasts-root')
  );
}

export default ToastShelf;
