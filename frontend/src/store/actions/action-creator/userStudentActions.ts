import { UserStudentactiontypes } from '../action-types/';
import { Dispatch } from 'redux';
import Http from '../../../http-common';
import { Action } from '../';
import { AxiosError } from 'axios';

export const getUserStudentList = (page: number = 1) => async (dispatch: Dispatch<Action>) => {

  try {
    dispatch({
      type: UserStudentactiontypes.FETCH_STUDENT_USER_LIST
    })

    const { data } = await Http.get(`/api/users?page=${page}`);

    dispatch({
      type: UserStudentactiontypes.FETCH_STUDENT_USER_LIST_SUCCESS,
      payload: data.data,
      total: data.total,
    })

  } catch (err: any) {
    dispatch({
      payload: err.message,
      type: UserStudentactiontypes.FETCH_STUDENT_USER_LIST_FAIL,
      status: err.status,
    })
  }
};

export const getUserStudent = (id: String) => async (dispatch: Dispatch<Action>) => {

  try {
    dispatch({
      type: UserStudentactiontypes.FETCH_STUDENT_USER
    })

    const { data } = await Http.get(`/api/users/${id}`);
    dispatch({
      type: UserStudentactiontypes.FETCH_STUDENT_USER_SUCCESS,
      payload: data,
    })

  } catch (err: any) {
    dispatch({
      payload: err.message,
      type: UserStudentactiontypes.FETCH_STUDENT_USER_FAIL,
      status: err.status,
    })
  }
};
