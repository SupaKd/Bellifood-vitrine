import { useParams } from "react-router-dom";
import products from "../data/products";

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

      <div className="products-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <img src={"/image/product.webp"} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
