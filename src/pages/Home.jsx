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

    <section className="actualites">
  <h2>Actualités</h2>
  <div className="actualites__list">
    <div className="actualite">
      <h3>🔥 Nouveau : Tacos Raclette !</h3>
      <p>Disponible tout l’hiver avec fromage fondant et viande au choix.</p>
    </div>
    <div className="actualite">
      <h3>⏰ Fermeture exceptionnelle</h3>
      <p>Le restaurant sera fermé le 1er mai pour la fête du travail.</p>
    </div>
    <div className="actualite">
      <h3>🎉 Promo du mois</h3>
      <p>1 menu acheté = 1 boisson offerte tous les mardis !</p>
    </div>
  </div>
</section>
    
    <section className="slider">
    <h2>Nos best sellers</h2>
      <Slider />
    </section>
<div className="background-home">
    <section className="propos">
      <div className="apropos">
        <h2>À propos de nous</h2>
        <p>
          Nous préparons des tacos généreux et savoureux avec des produits frais et une touche maison.
          Situés au cœur d’Oyonnax, notre restaurant vous accueille tous les jours.
        </p>
        </div>
        <img src="image/vitrine.webp"></img>
      </section>

    <section className="home-contact">
        <h2>Une question ?</h2>
        <NavLink to="contact">
          <button>
            Contactez-nous
          </button>
        </NavLink>
      </section>
      </div>
    </main>
  );
}
export default Home;
