import { all, call } from "typed-redux-saga";

import { categoriesSaga, watchAddCategories } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield* all([call(watchAddCategories), call(categoriesSaga), call(userSagas)]);
}

// export function* rootSaga() {
//   yield* all([call(watchAddCategories) /* other sagas */]);
// }
