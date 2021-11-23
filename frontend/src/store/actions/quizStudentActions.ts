import Quiz from "models/quizModels";
import { QuizStudentActionTypes } from "./action-types";

interface FetchStudentQuizListAction {
  type: QuizStudentActionTypes.FETCH_STUDENT_QUIZ_LIST
}

interface FetchStudentQuizListSuccessAction {
  type: QuizStudentActionTypes.FETCH_STUDENT_QUIZ_LIST_SUCCESS,
  payload: Quiz[],
  total: number,
}

interface FetchStudentQuizListFailAction {
  type: QuizStudentActionTypes.FETCH_STUDENT_QUIZ_LIST_FAIL,
  payload: string
}

export type StudentQuizAction =
  | FetchStudentQuizListAction
  | FetchStudentQuizListSuccessAction
  | FetchStudentQuizListFailAction
 
