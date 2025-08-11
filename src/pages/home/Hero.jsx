import { useState, useEffect } from "react";

const images = [
  "/image/hero.webp",
  "/image/hero2.webp",
  "/image/hero3.webp",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Navigation manuelle
  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="hero" role="region" aria-label="Hero Section">
      <div
        className="hero__slide"
        style={{ backgroundImage: `url(${images[current]})` }}
        aria-live="polite"
        aria-atomic="true"
      />
      <div className="hero__overlay">
        <div className="hero__content">
          <h1 className="hero__title">
            Savourez l'a<span className="t-hero">uthenticité</span> du French Tacos
          </h1>
          <button
            className="hero__cta"
            onClick={() => {
              const section = document.getElementById("menu");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            aria-label="Voir le menu"
          >
            MENU
          </button>
        </div>
      </div>

      <div className="hero__nav" aria-label="Navigation du slider">
        <button
          className="hero__nav-btn"
          onClick={goPrev}
          aria-label="Image précédente"
        >
          ‹
        </button>
        <button
          className="hero__nav-btn"
          onClick={goNext}
          aria-label="Image suivante"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Hero;
