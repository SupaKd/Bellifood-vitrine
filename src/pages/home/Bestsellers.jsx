import React from "react";

function Bestsellers() {
  const products = [
    {
      id: 1,
      img: "/image/product.webp",
      title: "SAVOYARD",
    },
    {
      id: 2,
      img: "/image/burger.webp",
      title: "CHEESEBURGER",
    },
    {
      id: 3,
      img: "/image/croque.webp",
      title: "CROQUE MONSIEUR",
    },
    {
      id: 4,
      img: "/image/product.webp",
      title: "CHÈVRE MIEL ",
    },
  ];

  return (
    <section className="product-grid">
      <h2>Nos Best sellers 🚀</h2>
      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bestsellers;
