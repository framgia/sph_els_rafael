import Quiz from "models/quizModels";
import { QuizActionType } from "./action-types";

interface FetchQuizListAction {
  type: QuizActionType.FETCH_QUIZ_LIST
}

interface FetchQuizListSuccessAction {
  type: QuizActionType.FETCH_QUIZ_LIST_SUCCESS,
  payload: Quiz[],
}

interface FetchQuizListFailAction {
  type: QuizActionType.FETCH_QUIZ_LIST_FAIL,
  payload: string
}

interface EditQuizAdminAction {
  type: QuizActionType.EDIT_QUIZ_ADMIN_MODAL,
  payload: Quiz | null,
}

interface SaveQuizDataAction {
  type: QuizActionType.SAVE_QUIZ_DATA
}

interface SaveQuizDataSuccessAction {
  type: QuizActionType.SAVE_QUIZ_DATA_SUCCESS,
  payload: null,
}

interface SaveQuizDataFailAction {
  type: QuizActionType.SAVE_QUIZ_DATA_ERROR,
  payload: string
}

interface UpdateQuizDataAction {
  type: QuizActionType.UPDATE_QUIZ_DATA
}

interface UpdateQuizDataSuccessAction {
  type: QuizActionType.UPDATE_QUIZ_DATA_SUCCESS,
  payload: null,
}

interface UpdateQuizDataFailAction {
  type: QuizActionType.UPDATE_QUIZ_DATA_FAIL,
  payload: string
}


interface DeleteQuizDataAction {
  type: QuizActionType.DELETE_QUIZ_DATA
}

interface DeleteQuizDataSuccessAction {
  type: QuizActionType.DELETE_QUIZ_DATA_SUCCESS,
}

interface DeleteQuizDataFailAction {
  type: QuizActionType.DELETE_QUIZ_DATA_FAIL,
  payload: string
}

export type QuizAction =
  | FetchQuizListAction
  | FetchQuizListFailAction
  | FetchQuizListSuccessAction
  | EditQuizAdminAction
  | SaveQuizDataAction
  | SaveQuizDataSuccessAction
  | SaveQuizDataFailAction
  | UpdateQuizDataAction
  | UpdateQuizDataSuccessAction
  | UpdateQuizDataFailAction
  | DeleteQuizDataAction
  | DeleteQuizDataSuccessAction
  | DeleteQuizDataFailAction;

