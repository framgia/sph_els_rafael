import User from "models/userModels";
import { AuthActionType } from "./action-types";

interface AuthStartAction {
  type: AuthActionType.AUTH_START
}

interface AuthSuccessAction {
  type: AuthActionType.AUTH_SUCCESS,
  user: User | null,
  idToken: string,
}

interface AuthFailAction {
  type: AuthActionType.AUTH_FAIL,
  payload: string,
  status: string | null,
}

interface AuthLogoutStartAction {
  type: AuthActionType.AUTH_LOGOUT
}

interface AuthLogoutSuccessAction {
  type: AuthActionType.AUTH_LOGOUT_SUCCESS,

}

interface AuthLogoutFailAction {
  type: AuthActionType.AUTH_LOGOUT_FAIL,
  payload: string
}

interface CheckValidAction {
  type: AuthActionType.CHECK_VALID_SUCCESS
}

export type AuthAction =
  | AuthStartAction
  | AuthFailAction
  | AuthSuccessAction
  | AuthLogoutStartAction
  | AuthLogoutSuccessAction
  | AuthLogoutFailAction
  | CheckValidAction

