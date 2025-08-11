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
      <Viande />
      <Sauce />
      <section className="bestsellers">
        <Bestsellers />
      </section>

      <h2 className="titre-cat" id="menu">
        Nos catégories
      </h2>

      <section className="menu-grid">
        {products.map((cat, index) => (
          <ScrollRevealWrapper key={cat.id} delay={index * 0.09}>
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
