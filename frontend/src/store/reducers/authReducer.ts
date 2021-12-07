import { AuthActionType } from '../actions/action-types/';
import { Action } from '../actions'
import User from "models/userModels";
import IRegisterErrorType from '../../types/registerErrorType'

interface AuthState {
  token: string | null;
  userLearnWords: {}[];
  quizzesTaken: {}[];
  user: User | null,
  userId: string | null,
  userRole: number | null,
  error: string | null,
  errorStatus: string | null,
  errorMessage: IRegisterErrorType | null,
  loading: boolean,
  registerLoading: boolean,
  authRedirectPath: string,
}

export const initialState = {
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("userid"),
  userRole: Number(localStorage.getItem('role')),
  userLearnWords: [],
  quizzesTaken: [],
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
        userRole: action.userRole,
        userLearnWords: action.learnWords,
        quizzesTaken: action.quizzesTaken,
        loading: false,
        error: null,
        errorMessage: null,
      }
    case AuthActionType.AUTH_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        errorStatus: action.status,
      }
    case AuthActionType.AUTH_LOGOUT:
      return {
        ...state,
        loading: true,
      }
    case AuthActionType.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
      }
    case AuthActionType.AUTH_LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
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
        userRole: action.userRole,
        user: action.user,
        userLearnWords: [],
        quizzesTaken: [],
        registerLoading: false,
        errorMessage: null,
      }
    case AuthActionType.REGISTER_START_FAIL:
      return {
        ...state,
        registerLoading: false,
        errorMessage: action.errorMessage,
      }
    case AuthActionType.CHECK_VALID_SUCCESS:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
}

export default reducer;
