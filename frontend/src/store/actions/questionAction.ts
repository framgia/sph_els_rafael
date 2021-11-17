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

export type QuestionAction =
  | FetchQuestionListAction
  | FetchQuestionListFailAction
  | FetchQuestionListSuccessAction
  | FetchQuizDataAction
  | FetchQuizDataSuccessAction
  | FetchQuizDataFailAction
