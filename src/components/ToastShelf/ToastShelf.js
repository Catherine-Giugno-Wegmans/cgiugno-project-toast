import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {

  const { toastStack } = React.useContext(ToastContext);
  const { removeToastFromStack } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper} role="region" aria-live='polite' aria-label='Notification'>
      {toastStack.map(({message, type, crypto}) => {
        return (
          <li key={crypto} className={styles.toastWrapper}>
            <Toast type={type} handleDismiss={() => removeToastFromStack(crypto)}>{message}</Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
