import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "../../UI/Slider";
import Hero from "../home/Hero";
import Actualite from "./Actualite";

function Home() {
  return (
    <main>
      <section className="Hero">
        <Hero />
      </section>

      <section className="actualite">
        <Actualite />
      </section>

      <section className="slider">
        <Slider />
      </section>

      <div className="background-home">
        <section className="propos">
          <div className="apropos__overlay">
            <h2>À propos de nous</h2>
            <p>
              Nous préparons des tacos généreux et savoureux avec des produits
              frais et une touche maison. Situés au cœur d’Oyonnax, notre
              restaurant vous accueille tous les jours.
            </p>
          </div>
        </section>
      </div>

      <section className="home-contact">
        <h2>Une question ?</h2>
        <NavLink to="contact">
          <button>Contactez-nous</button>
        </NavLink>
      </section>
    </main>
  );
}
export default Home;
