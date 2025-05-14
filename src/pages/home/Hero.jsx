import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Hero() {
  const images = ["/image/hero.webp", "/image/hero2.webp", "/image/hero3.webp"];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="hero">
      <div
        className="hero__slide"
        style={{ backgroundImage: `url(${images[current]})` }}
      >
        <div className="hero__overlay">
          <div className="hero__content">
            <h1 className="hero__title">
              Savourez l'authenticité du French Tacos
            </h1>
            <p className="hero__subtitle">
              Des recettes fraîchement préparées avec passion à Oyonnax.
            </p>
            <NavLink to="/menu" className="hero__cta">
              Voir le menu
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
