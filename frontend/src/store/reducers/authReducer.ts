import { AuthActionType } from '../actions/action-types/';
import { Action } from '../actions'
import User from "models/userModels";

interface AuthState {
  token: string | null;
  user: User | null,
  userId: string | null,
  error: string | null,
  errorStatus: string | null,
  loading: boolean,
  authRedirectPath: string,
}

export const initialState = {
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("token"),
  user: null,
  error: null,
  errorStatus: "",
  loading: false,
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
    default:
      return state;
  }
}

export default reducer;
