import { createSelector } from "reselect";
import { CategoryMap } from "./category.types";
import { CategoriesState } from "./category.reducer";

const selectCategoriesFromReducer = (state: any):CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesFromReducer],
  (stateSliced) => stateSliced.categories
);

export const selectIsLoading = createSelector(
  [selectCategoriesFromReducer],
  (stateSliced) => stateSliced.isLoading
);

export const selectCategoriesArray = createSelector(
  [selectCategories],
  (categories: any): CategoryMap =>
    categories.reduce((acc: any, category: any) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);
