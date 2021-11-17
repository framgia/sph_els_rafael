import Question from "@model/questionModel";
import Quiz from '@model/quizModels';
import { QuestionActionType } from "./action-types";

interface FetchQuestionListAction {
  type: QuestionActionType.FETCH_QUESTION_LIST
}

interface FetchQuestionListSuccessAction {
  type: QuestionActionType.FETCH_QUESTION_LIST_SUCCESS,
  payload: Question[],
}

interface FetchQuestionListFailAction {
  type: QuestionActionType.FETCH_QUESTION_LIST_FAIL,
  payload: string
}

interface FetchQuizDataAction {
  type: QuestionActionType.FETCH_QUIZ_DATA
}

interface FetchQuizDataSuccessAction {
  type: QuestionActionType.FETCH_QUIZ_DATA_SUCCESS,
  payload: Quiz,
}

interface FetchQuizDataFailAction {
  type: QuestionActionType.FETCH_QUIZ_DATA_FAIL,
  payload: string
}

interface EditQuestionAction {
  type: QuestionActionType.EDIT_QUESTION_MODAL,
  payload: Question | null,
}

interface SaveQuestionDataAction {
  type: QuestionActionType.SAVE_QUESTION_DATA,
  id: string,
}

interface SaveQuestionDataSuccessAction {
  type: QuestionActionType.SAVE_QUESTION_DATA_SUCCESS,
  payload: object,
}

interface SaveQuestionDataFailAction {
  type: QuestionActionType.SAVE_QUESTION_DATA_ERROR,
  payload: string
}

interface UpdateQuestionDataAction {
  type: QuestionActionType.UPDATE_QUESTION_DATA,
  id: string,
}

interface UpdateQuestionDataSuccessAction {
  type: QuestionActionType.UPDATE_QUESTION_DATA_SUCCESS,
  payload: object,
}

interface UpdateQuestionDataFailAction {
  type: QuestionActionType.UPDATE_QUESTION_DATA_ERROR,
  payload: string
}

export type QuestionAction =
  | FetchQuestionListAction
  | FetchQuestionListFailAction
  | FetchQuestionListSuccessAction
  | FetchQuizDataAction
  | FetchQuizDataSuccessAction
  | FetchQuizDataFailAction
  | EditQuestionAction
  | SaveQuestionDataAction
  | SaveQuestionDataFailAction
  | SaveQuestionDataSuccessAction
  | UpdateQuestionDataAction
  | UpdateQuestionDataSuccessAction
  | UpdateQuestionDataFailAction
