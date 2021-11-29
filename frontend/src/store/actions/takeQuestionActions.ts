import Question from "@model/questionModel";
import { takeQuizStudentActionTypes } from "./action-types";
import Quiz from "@model/quizModels";
import UserAnswer from "@model/userAnswerModel";

interface FetchQuestionListAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_QUESTION;
}

interface FetchQuestionListSuccessAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_QUESTION_SUCCESS;
  payload: Question[];
}

interface FetchQuestionListFailAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_QUESTION_FAIL;
  payload: string;
}

interface SetStudentUserAnswerAction {
  type: takeQuizStudentActionTypes.SET_STUDENT_USER_ANSWER;
  payload: {}[];
}

interface FetchTakeQuizDataAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_DATA;
}

interface FetchTakeQuizDataSuccessAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_DATA_SUCCESS;
  payload: Quiz;
}

interface FetchTakeQuizDataFailAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_DATA_FAIL;
  payload: string;
}

interface SaveUserAnswersAction {
  type: takeQuizStudentActionTypes.SAVE_STUDENT_ANSWER_DATA;
  id: string;
}

interface SaveUserAnswersSuccessAction {
  type: takeQuizStudentActionTypes.SAVE_STUDENT_ANSWER_DATA_SUCCESS;
  payload: object;
}

interface SaveUserAnswersFailAction {
  type: takeQuizStudentActionTypes.SAVE_STUDENT_ANSWER_DATA_FAIL;
  payload: string;
}

interface FetchUserAnswerDataAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_ANSWER_DATA;
}

interface FetchUserAnswerDataSuccessAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_ANSWER_DATA_SUCCESS;
  payload: UserAnswer[];
}

interface FetchUserAnswerDataFailAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_ANSWER_DATA_FAIL;
  payload: string;
}

interface SaveUserLearnWordsAction {
  type: takeQuizStudentActionTypes.SAVE_USER_LEARN_DATA;
  id: string;
}

interface SaveUserLearnWordsSuccessAction {
  type: takeQuizStudentActionTypes.SAVE_USER_LEARN_DATA_SUCCESS;
  payload: object;
}

interface SaveUserLearnWordsFailAction {
  type: takeQuizStudentActionTypes.SAVE_USER_LEARN_DATA_FAIL;
  payload: string;
}

export type TakeQuizAction =
  | FetchQuestionListAction
  | FetchQuestionListFailAction
  | FetchQuestionListSuccessAction
  | SetStudentUserAnswerAction
  | FetchTakeQuizDataAction
  | FetchTakeQuizDataSuccessAction
  | FetchTakeQuizDataFailAction
  | SaveUserLearnWordsAction
  | SaveUserLearnWordsSuccessAction
  | SaveUserLearnWordsFailAction
  | FetchUserAnswerDataAction
  | FetchUserAnswerDataSuccessAction
  | FetchUserAnswerDataFailAction
  | SaveUserAnswersAction
  | SaveUserAnswersSuccessAction
  | SaveUserAnswersFailAction;
