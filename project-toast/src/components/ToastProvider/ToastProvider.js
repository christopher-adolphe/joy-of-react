import React, { useCallback } from 'react';

export const ToastContext = React.createContext({
  toastList: [],
  handleCreateToast: () => {},
  handleDiscardToast: (id) => {},
  handleDismissAllToasts: () => {},
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

  const handleDismissAllToasts = useCallback((event) => {
    if (event.key === 'q') {
      console.log('handleDismissAllToasts called: ', event.key);
      setToastList([]);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('keydown', handleDismissAllToasts);

    return () => {
      window.removeEventListener('keydown', handleDismissAllToasts);
    }
  }, [handleDismissAllToasts]);

  const toastContextValue = {
    toastList,
    handleCreateToast,
    handleDiscardToast,
    handleDismissAllToasts,
  };

  return (
    <ToastContext.Provider value={ toastContextValue }>
      { children }
    </ToastContext.Provider>
  );
}

export default ToastProvider;
