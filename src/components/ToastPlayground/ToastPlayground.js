import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

const PureToastShelf = React.memo(ToastShelf);

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState('');
  const [toastType, setToastType] = React.useState('notice');

  const { addToastToStack } = React.useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();
    addToastToStack({
      message: toastMessage, 
      type: toastType,
      crypto: crypto.randomUUID()});

    setToastMessage('');
    setToastType('notice');
  }

  return (
      <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <PureToastShelf/>

        <form className={styles.controlsWrapper} onSubmit={event => handleSubmit(event)}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} value={toastMessage} onChange={event => setToastMessage(event.target.value)} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map(opt => {
                return (
                <label key={opt} htmlFor={`variant-notice-${opt}`}>
                  <input
                  id={`variant-notice-${opt}`}
                  type="radio"
                  name="variant"
                  value={opt}
                  checked={toastType === opt}
                  onChange={event => setToastType(event.target.value)} />{/* */}{opt}
              </label>);
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
  );
}

export default ToastPlayground;
