import Question from "@model/questionModel";
import { takeQuizStudentActionTypes } from "./action-types";
import Quiz from '@model/quizModels';

interface FetchQuestionListAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_QUESTION
}

interface FetchQuestionListSuccessAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_QUESTION_SUCCESS,
  payload: Question[],
}

interface FetchQuestionListFailAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_QUESTION_FAIL,
  payload: string
}

interface SetStudentUserAnswerAction{
  type: takeQuizStudentActionTypes.SET_STUDENT_USER_ANSWER,
  payload:{}[]
}

interface FetchTakeQuizDataAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_DATA
}

interface FetchTakeQuizDataSuccessAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_DATA_SUCCESS,
  payload: Quiz,
}

interface FetchTakeQuizDataFailAction {
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_DATA_FAIL,
  payload: string
}



export type TakeQuizAction =
  | FetchQuestionListAction 
  | FetchQuestionListFailAction
  | FetchQuestionListSuccessAction
  | SetStudentUserAnswerAction
  | FetchTakeQuizDataAction 
  | FetchTakeQuizDataSuccessAction
  | FetchTakeQuizDataFailAction
  