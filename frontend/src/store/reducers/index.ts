import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import quizReducer, { quizzesSaga } from './quizReducer';
import userReducer, { usersSaga } from './userReducer';
import authReducer from './authReducer';
import questionReducer, { questionsSaga } from './questionReducer';
import layoutReducer from './layoutReducer';
import studentQuizReducer from './quizStudentReducer';
import takeQuizReducer from './takeQuizReducer';
import studentUserReducer from './userStudentReducer';
import useSettingsReducer, { userSettingsSaga } from './userSettingReducer';

export function* rootSaga() {
  yield all([...quizzesSaga]);
  yield all([...usersSaga]);
  yield all([...questionsSaga]);
  yield all([...userSettingsSaga]);
}

const reducers = combineReducers({
  quizzes: quizReducer,
  users: userReducer,
  auth: authReducer,
  questions: questionReducer,
  layout: layoutReducer,
  quizStudent: studentQuizReducer,
  takeQuiz: takeQuizReducer,
  userStudent: studentUserReducer,
  userSetting: useSettingsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>
