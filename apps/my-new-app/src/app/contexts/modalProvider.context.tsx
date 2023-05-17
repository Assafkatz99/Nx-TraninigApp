import React, { createContext, useContext, useState } from 'react';

interface ModalContextProps {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultModalContext: ModalContextProps = {
  toggleModal: false,
  setToggleModal: () => null,
};

export const ModalContext =
  createContext<ModalContextProps>(defaultModalContext);

const ModalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toggleModal, setToggleModal] = useState(false);

  const contextValue: ModalContextProps = {
    toggleModal,
    setToggleModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
