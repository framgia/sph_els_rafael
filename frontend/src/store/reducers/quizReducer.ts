import ActionType from '../actions/action-types';
import { Action } from '../actions'
import { put, takeEvery, call } from "redux-saga/effects";
import Quiz from "models/quizModels";
import { getQuizList } from '../actions/action-creator'
import Swal from 'sweetalert2'

interface QuizState {
  quizList: Quiz[] | null;
  quizListloading: boolean;
  error: string | null;
  isSuccess: boolean;
  editQuizDetails: Quiz | null;
  SaveLoading: boolean,
}

export const initialState = {
  quizList: [],
  quizListloading: false,
  error: null,
  editQuizDetails: null,
  isSuccess: false,
  SaveLoading: false,
};

const reducer = (
  state: QuizState = initialState,
  action: Action): QuizState => {

  switch (action.type) {
    case ActionType.FETCH_QUIZ_LIST:
      return {
        ...state,
        quizListloading: true,
      };
    case ActionType.FETCH_QUIZ_LIST_SUCCESS:
      return {
        ...state,
        quizListloading: false,
        quizList: action.payload
      }
    case ActionType.FETCH_QUIZ_LIST_FAIL:
      return {
        ...state,
        quizListloading: false,
        error: action.payload
      }
    case ActionType.EDIT_QUIZ_ADMIN_MODAL:
      return {
        ...state,
        editQuizDetails: action.payload
      }
    case ActionType.SAVE_QUIZ_DATA:
      return {
        ...state,
        SaveLoading: true,
      }
    case ActionType.SAVE_QUIZ_DATA_SUCCESS:
      return {
        ...state,
        editQuizDetails: null,
        isSuccess: true,
        SaveLoading: false,
      }
    case ActionType.SAVE_QUIZ_DATA_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case ActionType.UPDATE_QUIZ_DATA:
      return {
        ...state,
        SaveLoading: true,
      }
    case ActionType.UPDATE_QUIZ_DATA_SUCCESS:
      return {
        ...state,
        editQuizDetails: null,
        isSuccess: true,
        SaveLoading: false,
      }
    case ActionType.UPDATE_QUIZ_DATA_FAIL:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}


export const quizzesSaga = [
  takeEvery(ActionType.SAVE_QUIZ_DATA_SUCCESS, getQuizListSaga),
  takeEvery(ActionType.UPDATE_QUIZ_DATA_SUCCESS, getQuizListSaga)
]

function* getQuizListSaga(action: Action) {
  if (action.type === ActionType.SAVE_QUIZ_DATA_SUCCESS || ActionType.UPDATE_QUIZ_DATA_SUCCESS) {
    yield put(getQuizList());
  }
  Swal.fire({
    icon: 'success',
    title: 'Sucessfully Save',
    showConfirmButton: false,
    timer: 1500
  })
}

export default reducer;
