import { QuestionActionType } from '../actions/action-types/';
import { Action } from '../actions'
import { put, takeEvery, call } from "redux-saga/effects";
import Question from "@model/questionModel";
import Quiz from "@model/quizModels";
import { getQuizList } from '../actions/action-creator'
import Swal, { SweetAlertIcon } from 'sweetalert2'

interface QuestionState {
  quizData: Quiz | null,
  quizDataLoading: boolean,
  questionList: Question[] | null;
  questionListloading: boolean;
  error: string | null;
  isSuccess: boolean;
  editQuestionDetails: Question | null;
  SaveLoading: boolean,
}

export const initialState = {
  quizData: null,
  quizDataLoading: false,
  questionList: [],
  questionListloading: false,
  error: null,
  editQuestionDetails: null,
  isSuccess: false,
  SaveLoading: false,
};

const reducer = (
  state: QuestionState = initialState,
  action: Action): QuestionState => {

  switch (action.type) {
    case QuestionActionType.FETCH_QUESTION_LIST:
      return {
        ...state,
        questionListloading: true,
      };
    case QuestionActionType.FETCH_QUESTION_LIST_SUCCESS:
      return {
        ...state,
        questionListloading: false,
        questionList: action.payload
      }
    case QuestionActionType.FETCH_QUESTION_LIST_FAIL:
      return {
        ...state,
        questionListloading: false,
        error: action.payload
      }
    case QuestionActionType.FETCH_QUIZ_DATA:
      return {
        ...state,
        quizDataLoading: true,
      };
    case QuestionActionType.FETCH_QUIZ_DATA_SUCCESS:
      return {
        ...state,
        quizDataLoading: false,
        quizData: action.payload
      }
    case QuestionActionType.FETCH_QUIZ_DATA_FAIL:
      return {
        ...state,
        quizDataLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
