import React from 'react';
import './Reports.css';
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { mockTransactions } from "../data/mockData";

const Reports: React.FC = () => {
  // Dados para o gráfico de categorias
  const categoriesSummary = mockTransactions.reduce((acc, transaction) => {
    if (!acc[transaction.category]) {
      acc[transaction.category] = 0;
    }
    acc[transaction.category] += transaction.value;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(categoriesSummary).map(([category, value]) => ({
    name: category,
    value: Math.abs(value), // Valores positivos para o gráfico
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div>
      <h2>Relatórios</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Reports;