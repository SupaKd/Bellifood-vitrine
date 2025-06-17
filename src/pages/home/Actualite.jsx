import React from "react";

function Actualite() {
  const actuslides = [
    {
      id: 1,
      img: "/image/hero2.webp",
      title: "BELLI",
    },
    {
      id: 2,
      img: "/image/hero.webp",
      title: "ORIENTAL",
    },
    {
      id: 3,
      img: "/image/chevre.webp",
      title: "CHÈVRE MIEL",
    },
    {
      id: 4,
      img: "/image/tarte.webp",
      title: "TARTE AU DAIM",
    },

  ];

  return (
    <section className="actualite-slider">
      <h2>Nos produits du moment !</h2>
      <div className="slider-track">
        {actuslides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.img} alt={slide.title} />
            <div className="slide__title-overlay">{slide.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Actualite;
