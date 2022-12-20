import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import appReducer from "./src/redux/reducers";
// import rootSga from "redux/saga";

import productReducer from "./src/redux/reducers";
import userReducer from "./src/redux/reducers";
import burgerReducer from "./src/redux/reducers";

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    burger: burgerReducer,
    product: productReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  //   sagaMiddleware,
  // ],
});
// sagaMiddleware.run(rootSga);
