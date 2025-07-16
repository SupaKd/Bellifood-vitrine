import React from "react";
import { Link } from "react-router-dom";
import products from "../../data/products.js";
import Bestsellers from "../../pages/product/Bestsellers.jsx";
import ScrollRevealWrapper from "../../hooks/ScrollRevealWrapper.jsx";
import Sauce from "../../components/Sauce.jsx";
import Viande from "../../components/Viande.jsx";


function Menu() {
  return (
    <main className="menu">
      <div className="t-menu">
        <h3>Un savoir-faire unique.</h3>
        <p>Chaque recette est préparée avec passion à Oyonnax, avec des ingrédients frais et de qualité. Notre cuisine allie tradition et créativité pour vous offrir des plats savoureux qui éveilleront vos papilles à chaque bouchée.</p>
      </div>
      <div className="top-menu">
        <h2 className="menu-title">Notre carte</h2>
        <p>Faites-vous plaisir, il y en a pour tous les goûts !</p>
      </div>

      <section className="bestsellers">
        <Bestsellers />
      </section>
      <Viande />
      <Sauce />


      <h2 className="titre-cat" id="menu">Nos catégories</h2>

      <section className="menu-grid">
        {products.map((cat, index) => (
          <ScrollRevealWrapper key={cat.id} delay={index * 0.01}>
            {/* on ne touche pas à la structure interne */}
            <Link to={`/menu/${cat.slug}`} className="menu-item">
              <img src={cat.image} alt={cat.name} />
              <h3>{cat.name}</h3>
            </Link>
          </ScrollRevealWrapper>
        ))}
      </section>
    </main>
  );
}

export default Menu;
