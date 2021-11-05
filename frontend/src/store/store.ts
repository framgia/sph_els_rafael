import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from "redux-saga";
import thunk, { ThunkMiddleware } from "redux-thunk";
import middleware from "./middleware";
import { Action } from './actions/'

import reducers, { rootSaga, RootState } from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      thunk as ThunkMiddleware<RootState, Action>,
      sagaMiddleware,
      ...middleware))
)

export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootSaga);

