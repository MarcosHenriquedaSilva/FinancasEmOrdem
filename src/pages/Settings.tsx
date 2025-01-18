import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h1>Configurações</h1>
      <div className="settings-form">
        <input type="text" placeholder="Alterar Nome" />
        <input type="password" placeholder="Alterar Senha" />
        <button>Salvar Alterações</button>
      </div>
    </div>
  );
};

export default Settings;
