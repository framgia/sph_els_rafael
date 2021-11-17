import { QuestionActionType } from '../actions/action-types/';
import { Action } from '../actions'
import { put, takeEvery, call } from "redux-saga/effects";
import Question from "@model/questionModel";
import Quiz from "@model/quizModels";
import { getQuestionList } from '../actions/action-creator'
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
    case QuestionActionType.EDIT_QUESTION_MODAL:
      return {
        ...state,
        editQuestionDetails: action.payload,
        error: null,
      }
    case QuestionActionType.SAVE_QUESTION_DATA:
      return {
        ...state,
        SaveLoading: true,
      }
    case QuestionActionType.SAVE_QUESTION_DATA_SUCCESS:
      return {
        ...state,
        editQuestionDetails: null,
        isSuccess: true,
        SaveLoading: false,
      }
    case QuestionActionType.SAVE_QUESTION_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        SaveLoading: false,
      }
    default:
      return state;
  }
}


export const questionsSaga = [
  takeEvery(QuestionActionType.SAVE_QUESTION_DATA_SUCCESS, showAlert),
  takeEvery(QuestionActionType.SAVE_QUESTION_DATA_ERROR, showAlert),
]

function* showAlert(action: Action) {
  type Icon = SweetAlertIcon;

  let icon: Icon = action.type === QuestionActionType.SAVE_QUESTION_DATA_SUCCESS
    ? "success" : 'error';
  let title = action.type === QuestionActionType.SAVE_QUESTION_DATA_SUCCESS
    ? "Sucessfully Save" : 'error in saving';

  Swal.fire({
    icon: `${icon}`,
    title: title,
    showConfirmButton: false,
    timer: 1500
  })

  yield call(getQuestionListSaga, action);
}

function* getQuestionListSaga(action: Action) {
  if (action.type === QuestionActionType.SAVE_QUESTION_DATA_SUCCESS) {
    const data: any = action.payload;
    const { question: { quiz_id } } = data;
    yield put(getQuestionList(quiz_id));
  }
}

export default reducer;
