import { takeLatest, all, call, put } from "typed-redux-saga";
import { AnyAction } from "redux";

import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from "../../utils/firebase";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}

function* addCategoriesSaga(action: AnyAction) {
  try {
    // Extract the categories from the action payload.
    const categories = action.payload;

    // Call your Firebase function to add the categories.
    yield call(addCollectionAndDocuments, "categories", categories);

    // Dispatch a success action if needed.
  } catch (error) {
    // Handle errors and dispatch a failure action if needed.
  }
}

export function* watchAddCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.ADD_CATEGORIES, addCategoriesSaga);
}
