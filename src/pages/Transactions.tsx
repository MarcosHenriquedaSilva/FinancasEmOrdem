import React from 'react';
import './Transactions.css';

const Transactions = () => {
  return (
    <div className="transactions-container">
      <h1>Transações</h1>
      <div className="transactions-form">
        <input type="text" placeholder="Descrição" />
        <input type="number" placeholder="Valor" />
        <button>Adicionar Transação</button>
      </div>
    </div>
  );
};

export default Transactions;
