import { UserSettingActionTypes } from '../actions/action-types/';
import { Action } from '../actions'
import { put, takeEvery, call } from "redux-saga/effects";
import Swal from 'sweetalert2';
import { startDetailsSettings } from '../actions/action-creator';

interface QuizState {
  error: string | null;
  isSuccess: boolean | null;
  SaveLoading: boolean,
}

export const initialState = {
  error: null,
  isSuccess: null,
  SaveLoading: false,
};


const reducer = (
  state: QuizState = initialState,
  action: Action): QuizState => {

  switch (action.type) {
    case UserSettingActionTypes.UPDATE_DETAILS_SETTINGS_START:
      return {
        ...state,
        isSuccess: null,
      };
    case UserSettingActionTypes.UPDATE_DETAILS_SETTINGS:
      return {
        ...state,
        SaveLoading: true,
        isSuccess: null,
      };
    case UserSettingActionTypes.UPDATE_DETAILS_SETTINGS_SUCCESS:
      return {
        ...state,
        SaveLoading: false,
        isSuccess: true,
        error: null,
      }
    case UserSettingActionTypes.UPDATE_DETAILS_SETTINGS_ERROR:
      return {
        ...state,
        SaveLoading: false,
        isSuccess: false,
        error: action.payload,
      }

    case UserSettingActionTypes.UPDATE_PASSWORD_SETTINGS:
      return {
        ...state,
        SaveLoading: true,
        isSuccess: null,
      };
    case UserSettingActionTypes.UPDATE_PASSWORD_SETTINGS_SUCCESS:
      return {
        ...state,
        SaveLoading: false,
        isSuccess: true,
        error: null,
      }
    case UserSettingActionTypes.UPDATE_PASSWORD_SETTINGS_ERROR:
      return {
        ...state,
        SaveLoading: false,
        isSuccess: false,
        error: action.payload
      }
    case UserSettingActionTypes.UPLOAD_DISPLAY_PICTURE:
      return {
        ...state,
        SaveLoading: true,
      };
    case UserSettingActionTypes.UPLOAD_DISPLAY_PICTURE_SUCCESS:
      return {
        ...state,
        SaveLoading: false,
        error: null,
      }
    case UserSettingActionTypes.UPLOAD_DISPLAY_PICTURE_ERROR:
      return {
        ...state,
        SaveLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export const userSettingsSaga = [
  takeEvery(UserSettingActionTypes.UPDATE_DETAILS_SETTINGS_SUCCESS, showAlert),
  takeEvery(UserSettingActionTypes.UPDATE_PASSWORD_SETTINGS_SUCCESS, showAlert),
  takeEvery(UserSettingActionTypes.UPLOAD_DISPLAY_PICTURE_SUCCESS, showAlert),

]

function* showAlert(action: Action) {

  Swal.fire({
    icon: `success`,
    title: 'successfully update',
    showConfirmButton: false,
    timer: 1500
  });

  yield call(startDetailsSaga, action);
}

function* startDetailsSaga(action: Action) {
  if (action.type === UserSettingActionTypes.UPDATE_DETAILS_SETTINGS_SUCCESS
    || UserSettingActionTypes.UPDATE_PASSWORD_SETTINGS_SUCCESS) {
    yield put(startDetailsSettings());
  }
}

export default reducer;
