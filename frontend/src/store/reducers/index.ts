import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import quizReducer, { quizzesSaga } from './quizReducer';

export function* rootSaga() {
  yield all([...quizzesSaga]);
}

const reducers = combineReducers({
  quizzes: quizReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>

