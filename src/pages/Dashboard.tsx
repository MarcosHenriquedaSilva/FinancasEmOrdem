import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-summary">
        <div>Entradas</div>
        <div>Saídas</div>
        <div>Total</div>
      </div>
    </div>
  );
};

export default Dashboard;
