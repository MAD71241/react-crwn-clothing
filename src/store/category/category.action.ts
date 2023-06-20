import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPES, Category } from "./category.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { DocumentData } from "firebase/firestore";

export type SetCategories = ActionWithPayload<
  CATEGORY_ACTION_TYPES.SET_CATEGORIES,
  Category[]
>;
export type FetchCategoriesStart =
  Action<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START>;
export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  DocumentData[]
>;
export type FetchCategoriesFailure = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILURE,
  Error
>;

export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailure
  | SetCategories;

export const setCategoriesArray = withMatcher((categoriesArray: Category[]) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray));

export const fetchCategoriesStart = withMatcher(() =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((
  categoriesArray: DocumentData[]
): FetchCategoriesSuccess =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray));

export const fetchCategoriesFailure = withMatcher((error: Error): FetchCategoriesFailure =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, error));

export const fetchCategoriesAsync = () => async (dispatch: any) => {
  dispatch(fetchCategoriesStart());
  try {
    const documentData = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(documentData));
  } catch (error: any) {
    dispatch(fetchCategoriesFailure(error));
  }
};
