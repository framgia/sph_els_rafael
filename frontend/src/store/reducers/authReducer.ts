import { AuthActionType } from '../actions/action-types/';
import { Action } from '../actions'
import User from "models/userModels";
import IRegisterErrorType from '../../types/registerErrorType'

interface AuthState {
  token: string | null;
  user: User | null,
  userId: string | null,
  error: string | null,
  errorStatus: string | null,
  errorMessage: IRegisterErrorType | null,
  loading: boolean,
  registerLoading: boolean,
  authRedirectPath: string,
}

export const initialState = {
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("token"),
  user: null,
  error: null,
  errorStatus: "",
  errorMessage: null,
  loading: false,
  registerLoading: false,
  authRedirectPath: '/'
};

const reducer = (
  state: AuthState = initialState,
  action: Action): AuthState => {
  switch (action.type) {
    case AuthActionType.AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case AuthActionType.AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        user: action.user,
        loading: false,
        error: null,
      }
    case AuthActionType.AUTH_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        errorStatus: action.status,
      }
    case AuthActionType.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
      }
    case AuthActionType.REGISTER_START:
      return {
        ...state,
        registerLoading: true,
        error: null,
      }
    case AuthActionType.REGISTER_START_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        user: action.user,
        registerLoading: false,
        errorMessage: null,
      }
    case AuthActionType.REGISTER_START_FAIL:
      return {
        ...state,
        registerLoading: false,
        errorMessage: action.errorMessage,
      }
    default:
      return state;
  }
}

export default reducer;
