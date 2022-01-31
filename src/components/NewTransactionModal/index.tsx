import Modal from 'react-modal';
import closeImg from '../../assets/Fechar.svg'
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saidas.svg'

import { Container, RadioBox } from './styles';
import { TransactionTypeContainer } from './styles';
import { useState } from 'react';


Modal.setAppElement('#root');

interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){
    
    const [transactionType, setTransactionType] = useState('deposit');

    return (
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >

          <button 
            type="button" 
            onClick={onRequestClose}
            className="react-modal-close"
            >
            
            <img src={closeImg} alt="Fechar modal"/>
          </button>  
          
          <Container>    
            <h2>Cadastrar Transação</h2>
            <input placeholder="Título"
            
            />

            <input
             type="number"
             placeholder="Valor"   
            />

            <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    onClick={() => { setTransactionType('deposit');}}
                    isActive={transactionType ==='deposit'}
                    activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada"/>
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox
                    type="button"
                    onClick={() => { setTransactionType('withdraw'); }}
                    isActive={transactionType ==='withdraw'}
                    activeColor="red"
                >
                    <img src={outcomeImg} alt="Saída"/>
                    <span>Saída</span>    
                </RadioBox>
                
            </TransactionTypeContainer>

            <input
             placeholder="Categoria"   
            />

            <button type="submit">
                Cadastrar    
            </button>           
                
           </Container>        
      </Modal>
    );
}