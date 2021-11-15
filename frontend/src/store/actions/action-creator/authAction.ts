import { AuthActionType } from '../action-types/';
import { Dispatch } from 'redux';
import Http from '../../../http-common';
import { Action } from '../';

export const authLogin = (DataForm: FormData) => async (dispatch: Dispatch<Action>) => {

  try {
    dispatch({
      type: AuthActionType.AUTH_START
    })

    const { data } = await Http.post("/login", DataForm, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
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
    console.log(err);
    dispatch({
      type: AuthActionType.AUTH_FAIL,
      payload: err.message,
      status: err.status,
    })
  }
};

export const authCheckState = () => async (dispatch: Dispatch<Action>) => {
  const token = localStorage.getItem('token');
  if (!token) {
    try {
      await authLogout();
    } catch (e) {

    }
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
    let token = localStorage.getItem('token');
    const { data } = await Http.post("/logout", {
      headers: {
        "Accept": "application/json",
        "Authorization": token ? `Bearer ${token}` : '',
      },
    });

    if (data.status === 201) {
      localStorage.removeItem('token');
      localStorage.removeItem('userid');
      dispatch({
        type: AuthActionType.AUTH_LOGOUT_SUCCESS,
      })
    } else {
      dispatch({
        type: AuthActionType.AUTH_LOGOUT_FAIL,
        payload: 'error log',
        status: data.status,
      })
    }
  } catch (err: any) {
    dispatch({
      type: AuthActionType.AUTH_LOGOUT_FAIL,
      payload: err.message,
      status: err.status,
    })
  }
};

