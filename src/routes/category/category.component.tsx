import "./category.styles";
import { useParams } from "react-router-dom";
import { useEffect, Fragment, useState } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";
import { Spinner } from "../../components/spinner/spinner.component";
import {
  selectCategoriesArray,
  selectIsLoading,
} from "../../store/category/category.selector";
import { useSelector } from "react-redux";

type CategoryRouteParams = {
  category: string
}

export const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams ;
  // const { categories } = useContext(CategoriesContext);
  const categories = useSelector(selectCategoriesArray);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};
