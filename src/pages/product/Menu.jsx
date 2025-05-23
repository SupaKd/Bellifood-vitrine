import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../data/products.js';
import Bestsellers from "../../pages/product/Bestsellers.jsx";


function Menu() {
  return (
    <main className='menu'>
      <div className="top-menu">
        <h2 className="menu-title">Notre carte</h2>
        <p>Faites-vous plaisir, il y en a pour tous les goûts !</p>
      </div>

      <section className="bestsellers">
        <Bestsellers />
      </section>
      <h2>Nos catégories</h2>

      <div className="menu-grid">
        
        {products.map((cat) => (
          <Link to={`/menu/${cat.slug}`} key={cat.id} className="menu-item">
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Menu;
