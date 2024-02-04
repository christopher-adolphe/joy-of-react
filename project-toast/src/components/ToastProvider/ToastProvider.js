import React from 'react';

export const ToastContext = React.createContext({
  toastList: [],
  handleCreateToast: () => {},
  handleToggleToast: () => {},
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

  function handleToggleToast(id) {
    const nextToastList = toastList.filter(toast => toast.id !== id);

    setToastList(nextToastList);
  }

  const toastContextValue = {
    toastList,
    handleCreateToast,
    handleToggleToast,
  }

  return (
    <ToastContext.Provider value={ toastContextValue }>
      { children }
    </ToastContext.Provider>
  );
}

export default ToastProvider;
