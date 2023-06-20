import { AnyAction } from "@reduxjs/toolkit";
import {
  setCategoriesArray,
  fetchCategoriesFailure,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "./category.action";
import { DocumentData } from "firebase/firestore";
import { Category } from "./category.types.js";

export const CATEGORY_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export type CategoriesState = {
  categories: Category[] | DocumentData[];
  readonly isLoading: Boolean;
  readonly error: Error | null;
};

export const categoriesReducer = (
  state = CATEGORY_INITIAL_STATE,
  action = {} as AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (setCategoriesArray.match(action)) {
    return {
      ...state,
      categories: action.payload,
    };
  }
  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      categories: action.payload,
    };
  }
  if (fetchCategoriesFailure.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};
