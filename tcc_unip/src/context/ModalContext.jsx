import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null); // plano escolhido

  const openModal = (data = null) => {
    setModalData(data);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  return (
    <ModalContext.Provider value={{ showModal, modalData, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);