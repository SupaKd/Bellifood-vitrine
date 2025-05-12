import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "../UI/Slider";

function Home() {
  return (
    <main>
      <section className="hero">
      <div className="hero__overlay">
        <div className="hero__content">
          <h1 className="hero__title">Savourez l'authenticité du french Tacos</h1>
          <p className="hero__subtitle">
            Des recettes fraîchement préparées avec passion à Oyonnax.
          </p>
          <NavLink to="/menu" className="hero__cta">
            Voir le menu
          </NavLink>
        </div>
      </div>
    </section>
    <section className="slider">
    <h2>Nos best sellers</h2>
      <Slider />
    </section>
    </main>
  );
}
export default Home;
