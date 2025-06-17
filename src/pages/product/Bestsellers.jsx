import React from "react";

function Bestsellers() {
  const products = [
    {
      id: 1,
      img: "/image/product.webp",
      title: "L'ORIENTAL",
      price: "8.50€",
    },
    {
      id: 2,
      img: "/image/burger.webp",
      title: "BELLI",
      price: "10.00€",
    },
    {
      id: 3,
      img: "/image/croque.webp",
      title: "TENDOORI",
      price: "8.50€",
    },
    {
      id: 4,
      img: "/image/product.webp",
      title: "CHÈVRE MIEL ",
      price: "8.50€",
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
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bestsellers;
