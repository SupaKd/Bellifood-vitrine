import { useParams, NavLink } from "react-router-dom";
import products from "../../data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CategoryPage() {
  const { category } = useParams();

  const categoryData = products.find((cat) => cat.slug === category);

  if (!categoryData) {
    return (
      <div className="category-page">
        <h2>Catégorie introuvable</h2>
        <NavLink to="/menu" className="back-link">
          <button type="button" aria-label="Retour au menu">
            <FontAwesomeIcon icon={faArrowLeft} /> Retour au menu
          </button>
        </NavLink>
      </div>
    );
  }

  const items = categoryData.products;

  return (
    <main className="category-page">
      <h2>{categoryData.name}</h2>

      <section className="products-grid" aria-label={`${categoryData.name} produits`}>
        {items.map((item) => (
          <article key={item.id} className="product-card" tabIndex="0">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </article>
        ))}
      </section>

      <NavLink to="/menu" className="back-link">
        <button type="button" aria-label="Retour au menu">
          <FontAwesomeIcon icon={faArrowLeft} /> Retour au menu
        </button>
      </NavLink>
    </main>
  );
}

export default CategoryPage;
