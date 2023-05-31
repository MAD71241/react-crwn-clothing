import { Fragment } from "react";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesArray,
  selectIsLoading,
} from "../../store/category/category.selector";
import { Spinner } from "../../components/spinner/spinner.component";

export const CategoriesPreview = () => {
  // const { categories } = useContext(CategoriesContext);
  const categories = useSelector(selectCategoriesArray);
  const isLoading = useSelector(selectIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            productsArray={categories[title]}
          ></CategoryPreview>
        ))
      )}
    </Fragment>
  );
};
