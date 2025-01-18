import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#4caf50', color: '#fff' }}>
      <Link to="/dashboard" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
      <Link to="/transactions" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Transações</Link>
      <Link to="/reports" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Relatórios</Link>
      <Link to="/categories" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Categorias</Link>
      <Link to="/settings" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Configurações</Link>
    </nav>
  );
};

export default Navbar;
