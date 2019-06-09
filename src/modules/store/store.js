import { createStore, combineReducers } from "redux";

import CoordinatesReducer from "./reducers/CoordinatesReducer";
import FiltersReducer from "./reducers/FiltersReducer";

export default () => {
  const store = createStore(
    combineReducers({
      coordinates: CoordinatesReducer,
      filters: FiltersReducer
    })
  );
  return store;
};
