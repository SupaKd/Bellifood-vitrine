import React from "react";

function ProductModal({ isOpen, onClose, product }) {
  if (!isOpen || !product) return null;

  // Fonction pour gérer le clic sur l’overlay
  const handleOverlayClick = (e) => {
    // Si on clique directement sur l’overlay (pas sur la modale)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="close-btn" onClick={onClose}>x</button>
        <img src={product.img} alt={product.title} />
        <h3>{product.title}</h3>
        <p className="price">{product.price}</p>
        <p className="description">
          {product.description || "Un délicieux sandwich préparé avec soin pour ravir vos papilles."}
        </p>
      </div>
    </div>
  );
}

export default ProductModal;
