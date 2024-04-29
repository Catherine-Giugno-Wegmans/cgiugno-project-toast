import React from 'react';
import UseKey from '../../hooks/UseKey/UseKey';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toastStack, setToastStack] = React.useState([]);

  UseKey('Escape', () => setToastStack([]))

  const addToastToStack = React.useCallback((newToast) => {
    setToastStack(currToastStack => [...currToastStack, newToast]);
  }, []);

  const removeToastFromStack = React.useCallback((cryptoId) => {
    setToastStack(currToastStack => currToastStack.filter(toast => toast.crypto !== cryptoId));
  }, []);

  console.log(ToastContext.Provider.value);

  return <ToastContext.Provider value={{ toastStack, addToastToStack, removeToastFromStack }}>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
