import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.js';

function Menu() {
  return (
    <main className='menu'>
      <div className="top-menu">
        <h2 className="menu-title">Notre carte</h2>
        <p>Faites-vous plaisir, il y en a pour tous les goûts !</p>
      </div>

      <div className="menu-grid">
        {products.map((cat) => (
          <Link to={`/menu/${cat.slug}`} key={cat.id} className="menu-item">
            <img src="image/product.webp" alt={cat.name} />
            <h3>{cat.name}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Menu;
