import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastList, handleToggleToast }) {
  return (
    <>
    {
      toastList.length > 0 && (
        <ol className={styles.wrapper}>
          {
            toastList.map(({ id, message, variant }) => (
              <li key={ id } className={styles.toastWrapper}>
                <Toast id={ id } variant={ variant } handleToggleToast={ handleToggleToast }>{ message }</Toast>
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
