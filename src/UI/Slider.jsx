import React from "react";

function Slider() {
  const slides = [
    {
      id: 1,
      img: "/image/product.webp",
      description: "SAVOYARD",
      alt: "Tacos 1",
    },
    {
      id: 2,
      img: "/image/product.webp",
      description: "CHEESE BURGER",
      alt: "Tacos 2",
    },
    {
      id: 3,
      img: "/image/product.webp",
      description: " CHEVRE MIEL",
      alt: "Tacos 3",
    },
    {
      id: 4,
      img: "/image/product.webp",
      description: "CROQUE-MONSIEUR",
      alt: "Tacos 4",
    },
  ];

  return (
    <section className="simple-slider">
      <h2>Nos best sellers 🚀</h2>
      <div className="slider-track">
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.img} alt={slide.alt} />
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Slider;
