import Quiz from "models/quizModels";
import ActionType from "./action-types";

interface FetchQuizListAction {
  type: ActionType.FETCH_QUIZ_LIST
}

interface FetchQuizListSuccessAction {
  type: ActionType.FETCH_QUIZ_LIST_SUCCESS,
  payload: Quiz[],
}

interface FetchQuizListFailAction {
  type: ActionType.FETCH_QUIZ_LIST_FAIL,
  payload: string
}

interface EditQuizAdminAction {
  type: ActionType.EDIT_QUIZ_ADMIN_MODAL,
  payload: Quiz | null,
}

interface SaveQuizDataAction {
  type: ActionType.SAVE_QUIZ_DATA
}

interface SaveQuizDataSuccessAction {
  type: ActionType.SAVE_QUIZ_DATA_SUCCESS,
  payload: null,
}

interface SaveQuizDataFailAction {
  type: ActionType.SAVE_QUIZ_DATA_ERROR,
  payload: string
}

interface UpdateQuizDataAction {
  type: ActionType.UPDATE_QUIZ_DATA
}

interface UpdateQuizDataSuccessAction {
  type: ActionType.UPDATE_QUIZ_DATA_SUCCESS,
  payload: null,
}

interface UpdateQuizDataFailAction {
  type: ActionType.UPDATE_QUIZ_DATA_FAIL,
  payload: string
}

export type Action =
  | FetchQuizListAction
  | FetchQuizListFailAction
  | FetchQuizListSuccessAction
  | EditQuizAdminAction
  | SaveQuizDataAction
  | SaveQuizDataSuccessAction
  | SaveQuizDataFailAction
  | UpdateQuizDataAction
  | UpdateQuizDataSuccessAction
  | UpdateQuizDataFailAction;

