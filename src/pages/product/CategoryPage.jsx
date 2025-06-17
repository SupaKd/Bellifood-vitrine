import { useParams } from "react-router-dom";
import products from "../../data/products";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CategoryPage() {
  const { category } = useParams();

  const categoryData = products.find((cat) => cat.slug === category);

  if (!categoryData) {
    return <h2>Catégorie introuvable</h2>;
  }

  const items = categoryData.products;

  return (
    <div className="category-page">
      <h2>{categoryData.name}</h2>
      <NavLink to="/menu">
        <button>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </NavLink>
      <div className="products-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  
  );
}

export default CategoryPage;
