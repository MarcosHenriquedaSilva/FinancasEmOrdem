
import './Dashboard.css';
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { mockTransactions } from "../data/mockData";

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const totalIncome = mockTransactions
    .filter((transaction) => transaction.value > 0)
    .reduce((sum, transaction) => sum + transaction.value, 0);

  const totalExpenses = mockTransactions
    .filter((transaction) => transaction.value < 0)
    .reduce((sum, transaction) => sum + transaction.value, 0);

  const totalBalance = totalIncome + totalExpenses;

  // Função para logout
  const handleLogout = () => {
    // Chama a função de logout do contexto para limpar o estado
    logout();

    // Limpa os dados no localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    // Redireciona para a página de login
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h3>Entradas</h3>
          <p style={{ color: "green" }}>
            {totalIncome.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <div>
          <h3>Saídas</h3>
          <p style={{ color: "red" }}>
            {totalExpenses.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <div>
          <h3>Saldo Total</h3>
          <p style={{ color: totalBalance >= 0 ? "green" : "red" }}>
            {totalBalance.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

