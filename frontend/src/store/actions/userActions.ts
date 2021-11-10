import User from "models/userModels";
import { UserAdminQuiz } from "./action-types";

interface FetchUserListAction {
  type: UserAdminQuiz.FETCH_USER_LIST
}

interface FetchUserListSuccessAction {
  type: UserAdminQuiz.FETCH_USER_LIST_SUCCESS,
  payload: User[],
}

interface FetchUserListFailAction {
  type: UserAdminQuiz.FETCH_USER_LIST_FAIL,
  payload: string
}

interface EditUserAdminAction {
  type: UserAdminQuiz.EDIT_USER_MODAL,
  payload: User | null,
}

interface SaveUserDataAction {
  type: UserAdminQuiz.SAVE_USER_DATA
}

interface SaveUserDataSuccessAction {
  type: UserAdminQuiz.SAVE_USER_DATA_SUCCESS,
  payload: null,
}

interface SaveUserDataFailAction {
  type: UserAdminQuiz.SAVE_USER_DATA_ERROR,
  payload: string
}

interface UpdateUserDataAction {
  type: UserAdminQuiz.UPDATE_USER_DATA
}

interface UpdateUserDataSuccessAction {
  type: UserAdminQuiz.UPDATE_USER_DATA_SUCCESS,
  payload: null,
}

interface UpdateUserDataFailAction {
  type: UserAdminQuiz.UPDATE_USER_DATA_FAIL,
  payload: string
}


interface DeleteUserDataAction {
  type: UserAdminQuiz.DELETE_USER_DATA
}

interface DeleteUserDataSuccessAction {
  type: UserAdminQuiz.DELETE_USER_DATA_SUCCESS,
}

interface DeleteUserDataFailAction {
  type: UserAdminQuiz.DELETE_USER_DATA_FAIL,
  payload: string
}

export type UserAction =
  | FetchUserListAction
  | FetchUserListFailAction
  | FetchUserListSuccessAction
  | EditUserAdminAction
  | SaveUserDataAction
  | SaveUserDataSuccessAction
  | SaveUserDataFailAction
  | UpdateUserDataAction
  | UpdateUserDataSuccessAction
  | UpdateUserDataFailAction
  | DeleteUserDataAction
  | DeleteUserDataSuccessAction
  | DeleteUserDataFailAction;


