import User from "models/userModels";
import { AuthActionType } from "./action-types";
import IRegisterErrorType from '../../types/registerErrorType'
interface AuthStartAction {
  type: AuthActionType.AUTH_START
}

interface AuthSuccessAction {
  type: AuthActionType.AUTH_SUCCESS,
  user: User | null,
  idToken: string,
  userRole: number,
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

interface RegisterStartAction {
  type: AuthActionType.REGISTER_START
}

interface RegisterSuccessAction {
  type: AuthActionType.REGISTER_START_SUCCESS,
  user: User | null,
  idToken: string,
  userRole: number,
}

interface RegisterFailAction {
  type: AuthActionType.REGISTER_START_FAIL,
  errorMessage: IRegisterErrorType | null,
}

export type AuthAction =
  | AuthStartAction
  | AuthFailAction
  | AuthSuccessAction
  | AuthLogoutStartAction
  | AuthLogoutSuccessAction
  | AuthLogoutFailAction
  | CheckValidAction
  | RegisterStartAction
  | RegisterSuccessAction
  | RegisterFailAction

