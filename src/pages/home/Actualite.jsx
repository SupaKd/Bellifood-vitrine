import React from "react";

function Actualite() {
  const actuslides = [
    {
      id: 1,
      img: "/image/product.webp",
      title: "🔥 Nouveau : Tacos Raclette !",
      content: "Disponible tout l’hiver avec fromage fondant et viande au choix.",
    },
    {
      id: 2,
      img: "/image/product.webp",
      title: "⏰ Fermeture exceptionnelle",
      content: "Le restaurant sera fermé le 1er mai pour la fête du travail.",
    },
    {
      id: 3,
      img: "/image/product.webp",
      title: "🎉 Promo du mois",
      content: "1 menu acheté = 1 boisson offerte tous les mardis !",
    },
  ];

  return (
    <section className="actualite-slider">
      <h2>Actualités 🗞️</h2>
      <div className="slider-track">
        {actuslides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.img} alt={slide.title} />
            <h3>{slide.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Actualite;
