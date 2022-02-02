import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/Fechar.svg';
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saidas.svg';

import { Container, RadioBox } from './styles';
import { TransactionTypeContainer } from './styles';
import { api } from '../../services/api';


interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [transactionType, setTransactionType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        const data = {
            title,
            amount,
            category,
            transactionType,
        };

        api.post('/transactions', data)
    }

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
          
          <Container onSubmit={handleCreateNewTransaction}>    
            <h2>Cadastrar Transação</h2>
            <input
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input
                type="number"
                placeholder="Valor"
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}   
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
                    onClick={() => { setTransactionType('withdraw');}}
                    isActive={transactionType ==='withdraw'}
                    activeColor="red"
                >
                    <img src={outcomeImg} alt="Saída"/>
                    <span>Saída</span>    
                </RadioBox>
                
            </TransactionTypeContainer>

            <input
                placeholder="Categoria" 
                value={category}
                onChange={event => setCategory(event.target.value)}  
            />

            <button type="submit">
                Cadastrar    
            </button>           
                
           </Container>        
      </Modal>
    );
}