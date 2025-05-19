import React from "react";

function Actualite() {
  const actuslides = [
    {
      id: 1,
      img: "/image/resto.webp",
      title: "🔥 Nouveau : Tacos Raclette !",
      content: "Disponible tout l’hiver avec fromage fondant et viande au choix.",
    },
    {
      id: 2,
      img: "/image/hero.webp",
      title: "⏰ Fermeture exceptionnelle",
      content: "Le restaurant sera fermé le 1er mai pour la fête du travail.",
    },
    {
      id: 3,
      img: "/image/hero3.webp",
      title: "🎉 Promo du mois",
      content: "1 menu acheté = 1 boisson offerte tous les mardis !",
    },
  ];

  return (
    <section className="actualite-slider">
      <h2>Suivez-nous sur nos réseaux ! </h2>
      <div className="slider-track">
        {actuslides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.img} alt={slide.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Actualite;
