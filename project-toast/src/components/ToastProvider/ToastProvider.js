import React from 'react';

import useKeydown from '../../hooks/useKeydown';

export const ToastContext = React.createContext({
  toastList: [],
  handleCreateToast: () => {},
  handleDiscardToast: (id) => {},
});

ToastContext.displayName = 'ToastContext';

function ToastProvider({ children }) {
  const [ toastList, setToastList ] = React.useState([]);

  function handleCreateToast(message, variant) {
    const nextToast = {
      id: window.crypto.randomUUID(),
      message,
      variant,
    };
    const nextToastList = [ ...toastList, nextToast ];

    setToastList(nextToastList);
  }

  function handleDiscardToast(id) {
    const nextToastList = toastList.filter(toast => toast.id !== id);

    setToastList(nextToastList);
  }

  const handleDismissAllToasts = React.useCallback(() => {
    setToastList([]);
  }, []);

  useKeydown('Escape', handleDismissAllToasts);

  const toastContextValue = {
    toastList,
    handleCreateToast,
    handleDiscardToast,
  };

  return (
    <ToastContext.Provider value={ toastContextValue }>
      { children }
    </ToastContext.Provider>
  );
}

export default ToastProvider;
