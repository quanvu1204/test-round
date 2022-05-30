import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootSaga from './saga';
import authSlice from './services/controllers/auth/AuthSlice';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), routerMiddleware(history), sagaMiddleware];

const store = configureStore({
  reducer: {
    router: connectRouter(history),
    auth: authSlice,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
