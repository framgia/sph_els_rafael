import { UserAdminQuiz } from '../actions/action-types/';
import { Action } from '../actions'
import { put, takeEvery, call } from "redux-saga/effects";
import User from "models/userModels";
import { getUserList } from '../actions/action-creator'
import Swal, { SweetAlertIcon } from 'sweetalert2'
import { ErrorMessage } from '../actions/userActions'

interface UserState {
  userList: User[];
  userListloading: boolean;
  error: ErrorMessage | null;
  isSuccess: boolean;
  editUserDetails: User | null;
  SaveLoading: boolean,
}

export const initialState = {
  userList: [],
  userListloading: false,
  error: null,
  editUserDetails: null,
  isSuccess: false,
  SaveLoading: false,
};

const reducer = (
  state: UserState = initialState,
  action: Action): UserState => {

  switch (action.type) {
    case UserAdminQuiz.FETCH_USER_LIST:
      return {
        ...state,
        userListloading: true,
      };
    case UserAdminQuiz.FETCH_USER_LIST_SUCCESS:
      return {
        ...state,
        userListloading: false,
        userList: action.payload
      }
    case UserAdminQuiz.DELETE_USER_DATA_FAIL:
      return {
        ...state,
        userListloading: false,
        error: action.payload
      }
    case UserAdminQuiz.EDIT_USER_MODAL:
      return {
        ...state,
        editUserDetails: action.payload,
        error: null,
      }
    case UserAdminQuiz.SAVE_USER_DATA:
      return {
        ...state,
        SaveLoading: true,
      }
    case UserAdminQuiz.SAVE_USER_DATA_SUCCESS:
      return {
        ...state,
        editUserDetails: null,
        isSuccess: true,
        SaveLoading: false,
      }
    case UserAdminQuiz.SAVE_USER_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        SaveLoading: false,
      }

    case UserAdminQuiz.UPDATE_USER_DATA:
      return {
        ...state,
        SaveLoading: true,

      }
    case UserAdminQuiz.UPDATE_USER_DATA_SUCCESS:
      return {
        ...state,
        editUserDetails: null,
        isSuccess: true,
        SaveLoading: false,
      }
    case UserAdminQuiz.UPDATE_USER_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        SaveLoading: false,
      }
    default:
      return state;
  }
}


export const usersSaga = [
  takeEvery(UserAdminQuiz.SAVE_USER_DATA_SUCCESS, showAlert),
  takeEvery(UserAdminQuiz.SAVE_USER_DATA_ERROR, showAlert),
  takeEvery(UserAdminQuiz.UPDATE_USER_DATA_SUCCESS, showAlert),
  takeEvery(UserAdminQuiz.UPDATE_USER_DATA_FAIL, showAlert),

  takeEvery(UserAdminQuiz.DELETE_USER_DATA_SUCCESS, showAlert),

]

function* showAlert(action: Action) {
  type Icon = SweetAlertIcon;

  let icon: Icon = "success";
  let title = "Sucessfully Save";

  if (action.type === UserAdminQuiz.SAVE_USER_DATA_ERROR &&
    UserAdminQuiz.UPDATE_USER_DATA_FAIL) {
    icon = 'error';
    title = 'error in saving'
  }

  Swal.fire({
    icon: `${icon}`,
    title: title,
    showConfirmButton: false,
    timer: 1500
  })

  yield call(getUserListSaga, action);
}

function* getUserListSaga(action: Action) {
  if (action.type === UserAdminQuiz.SAVE_USER_DATA_SUCCESS
    || UserAdminQuiz.UPDATE_USER_DATA_SUCCESS
    || UserAdminQuiz.DELETE_USER_DATA_SUCCESS) {
    yield put(getUserList());
  }
}


export default reducer;
