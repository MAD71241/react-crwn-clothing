import { createSelector } from "reselect";

const selectCategoriesFromReducer = (state) => state.categories;

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
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
