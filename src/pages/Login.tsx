import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>FinançasEmOrdem</h1>
        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="#">Esqueci minha senha</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
