import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';

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
    <TransactionsProvider>
      <Header 
          onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}
