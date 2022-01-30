import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModaisOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModaisOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModaisOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={ handleOpenNewTransactionModal }/>
      <Dashboard />
      <Modal 
          isOpen={ isNewTransactionModalOpen }
          onRequestClose={ handleCloseNewTransactionModal }>
          <h2>Cadastrar Transação</h2>        
      </Modal>
      <GlobalStyle />
    </>
  );
}
