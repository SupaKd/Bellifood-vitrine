import { NavLink } from "react-router-dom";
import Bestsellers from "./Bestsellers";
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

      <section className="resto">
        <img src="/image/resto.webp" alt="resto" />
      </section>

      <section className="slider">
        <Bestsellers />
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
            <h2>Une question ?</h2>
            <NavLink to="contact">
              <button>Contactez-nous</button>
            </NavLink>
          </div>
        </section>
      </div>
    </main>
  );
}
export default Home;
