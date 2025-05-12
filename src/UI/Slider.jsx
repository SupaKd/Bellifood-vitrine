import React from "react";

function Slider() {
  const slides = [
    { id: 1, img: "/image/product.webp", alt: "Sushi 1" },
    { id: 2, img: "/image/product.webp", alt: "Sushi 2" },
    { id: 3, img: "/image/product.webp", alt: "Sushi 3" },
    { id: 4, img: "/image/product.webp", alt: "Sushi 4" },
  ];

  return (
    <section className="simple-slider">
      <div className="slider-track">
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.img} alt={slide.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Slider;
