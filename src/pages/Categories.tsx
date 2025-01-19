import React from 'react';
import './Categories.css';
import { mockTransactions } from "../data/mockData";

const Categories: React.FC = () => {
  // Agrupar valores por categoria
  const categoriesSummary = mockTransactions.reduce((acc, transaction) => {
    if (!acc[transaction.category]) {
      acc[transaction.category] = 0;
    }
    acc[transaction.category] += transaction.value;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div>
      <h2>Categorias</h2>
      <ul>
        {Object.entries(categoriesSummary).map(([category, value]) => (
          <li key={category}>
            <strong>{category}:</strong>{" "}
            <span
              style={{
                color: value > 0 ? "green" : "red",
              }}
            >
              {value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;