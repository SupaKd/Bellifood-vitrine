import React, { useState } from "react";
import ProductModal from "../../components/ProductModal.jsx";

function Bestsellers() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      img: "/image/oriental.webp",
      title: "L'ORIENTAL",
      price: "8.50€",
      description: "Kefta ou escalope, frites, poivrons, sauce gruyère, cheddar, oeuf."
    },
    {
      id: 2,
      img: "/image/hero2.webp",
      title: "BELLI",
      price: "10.00€",
      description: "Escalope, kefta, bacon sauce algérienne, barbecue, cheddar. Menu 12.50€"
    },
    {
      id: 3,
      img: "/image/cro.webp",
      title: "CROQUE",
      price: "2.50€",
      description: "Cheddar, dinde, sauce fromagére."
    },
    {
      id: 4,
      img: "/image/tarti.webp",
      title: "Belli tasty",
      price: "8.00€",
      description: "Moyen 8.00€ et le grand à 12.00€."
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="product-grid">
      <h2>Nos Best sellers 🚀</h2>
      <div className="grid">
        {products.map((product) => (
          <div
            className="card"
            key={product.id}
            onClick={() => openModal(product)}
          >
            <img src={product.img} alt={product.title} />
            <div className="card-content">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </section>
  );
}

export default Bestsellers;
