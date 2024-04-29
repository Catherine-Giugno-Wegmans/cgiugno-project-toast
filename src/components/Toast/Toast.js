import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({type = 'notice', handleDismiss, children}) {
  const IconType = ICONS_BY_VARIANT[type];

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.iconContainer}>
        <IconType size={24} />
      </div>
      <VisuallyHidden>
        {type}
      </VisuallyHidden>
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton} onClick={handleDismiss} aria-label='Dismiss message' aria-live='off'>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
