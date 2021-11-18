import { AuthActionType } from '../action-types/';
import { Dispatch } from 'redux';
import Http from '../../../http-common';
import { Action } from '../';
import { AxiosError } from 'axios';

export const authLogin = (DataForm: FormData) => async (dispatch: Dispatch<Action>) => {

  try {
    dispatch({
      type: AuthActionType.AUTH_START
    })

    const { data } = await Http.post("/api/login", DataForm, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      }
    });

    localStorage.setItem('token', data.token);
    localStorage.setItem('userid', data.user.id);

    dispatch({
      type: AuthActionType.AUTH_SUCCESS,
      user: data.user,
      idToken: data.token,
    })

  } catch (err: any) {
    dispatch({
      type: AuthActionType.AUTH_FAIL,
      payload: err.message,
      status: err.status,
    })
  }
};

export const authCheckState = () => async (dispatch: Dispatch<Action>) => {

  let token = localStorage.getItem('token');
  if (!token) {
    await authLogout();
  } else {
    dispatch({
      type: AuthActionType.AUTH_SUCCESS,
      idToken: token,
      user: null,
    })
  }
}

export const authLogout = () => async (dispatch: Dispatch<Action>): Promise<any> => {

  try {
    dispatch({
      type: AuthActionType.AUTH_LOGOUT
    })

    await Http.post("/api/logout", {
      headers: {
        "Accept": "application/json",
      },
    });

    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    dispatch({
      type: AuthActionType.AUTH_LOGOUT_SUCCESS,
    })
  } catch (err: any) {
    dispatch({
      type: AuthActionType.AUTH_LOGOUT_FAIL,
      payload: err.message,
      status: err.status,
    })
  }
};

export const register = (DataForm: FormData) => async (dispatch: Dispatch<Action>) => {

  try {
    dispatch({
      type: AuthActionType.REGISTER_START
    })
    const { data } = await Http.post("/api/register", DataForm, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      }
    });

    localStorage.setItem('token', data.token);
    localStorage.setItem('userid', data.user.id);

    dispatch({
      type: AuthActionType.REGISTER_START_SUCCESS,
      user: data.user,
      idToken: data.token,
    })
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      dispatch({
        type: AuthActionType.REGISTER_START_FAIL,
        errorMessage: err.response.data.errors,
      })
    }
  }
};
