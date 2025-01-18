import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>FEO</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/transactions">Transações</Link>
        </li>
        <li>
          <Link to="/reports">Relatórios</Link>
        </li>
        <li>
          <Link to="/categories">Categorias</Link>
        </li>
        <li>
          <Link to="/settings">Configurações</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
