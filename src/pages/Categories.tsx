import React from 'react';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories-container">
      <h1>Categorias</h1>
      <div className="categories-list">
        <ul>
          <li>
            Alimentação <button>Editar</button>
          </li>
          <li>
            Transporte <button>Editar</button>
          </li>
          <li>
            Lazer <button>Editar</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
