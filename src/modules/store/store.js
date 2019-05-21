import { createStore, combineReducers } from "redux";

import CoordinatesReducer from "./reducers/CoordinatesReducer";

export default () => {
  const store = createStore(
    combineReducers({
      coordinates: CoordinatesReducer
    })
  );
  return store;
};
