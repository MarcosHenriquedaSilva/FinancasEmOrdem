import React from 'react';
import './Transactions.css';
import { mockTransactions } from "../data/mockData";

const Transactions: React.FC = () => {
  return (
    <div>
      <h2>Transações</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {mockTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td
                style={{
                  color: transaction.value > 0 ? "green" : "red",
                }}
              >
                {transaction.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;