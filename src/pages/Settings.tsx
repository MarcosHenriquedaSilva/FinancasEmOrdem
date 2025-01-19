import React from 'react';
import './Settings.css';

const Settings: React.FC = () => {
  return (
    <div>
      <h2>Configurações</h2>
      <form>
        <div>
          <label htmlFor="theme">Tema:</label>
          <select id="theme">
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </div>
        <div>
          <label htmlFor="language">Idioma:</label>
          <select id="language">
            <option value="pt-BR">Português</option>
            <option value="en-US">Inglês</option>
          </select>
        </div>
        <button type="submit">Salvar Configurações</button>
      </form>
    </div>
  );
};

export default Settings;