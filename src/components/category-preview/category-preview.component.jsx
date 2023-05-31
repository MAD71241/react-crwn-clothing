import "./category-preview.styles.scss";
import { ProductCard } from "../product-card/product-card.component";
import { Link } from "react-router-dom";

export const CategoryPreview = ({ title, productsArray }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {productsArray
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} productsArray={productsArray} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};
