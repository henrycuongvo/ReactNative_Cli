import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSga from './src/store/redux/saga';

import burgerReducer from './src/store/redux/reducers/burger.reducer';
import userReducer from './src/store/redux/reducers/user.reducer';
import productReducer from './src/store/redux/reducers/product.reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        burger: burgerReducer,
        user: userReducer,
        products: productReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
        sagaMiddleware,
    ],
});
sagaMiddleware.run(rootSga);
