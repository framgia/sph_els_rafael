import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import quizReducer, { quizzesSaga } from './quizReducer';
import userReducer, { usersSaga } from './userReducer';
import authReducer from './authReducer';
import questionReducer from './questionReducer';

export function* rootSaga() {
  yield all([...quizzesSaga]);
  yield all([...usersSaga]);
}

const reducers = combineReducers({
  quizzes: quizReducer,
  users: userReducer,
  auth: authReducer,
  questions: questionReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>



