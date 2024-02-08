import React from 'react';

import { ToastContext } from '../ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastList } = React.useContext(ToastContext);

  return (
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
    </>
  );
}

export default ToastShelf;
