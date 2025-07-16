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
              Savourez l'a<span className="t-hero">uthenticité</span> du French
              Tacos
            </h1>

            <button
              onClick={() => {
                const section = document.getElementById("menu");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hero__cta"
            >
              MENU
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
