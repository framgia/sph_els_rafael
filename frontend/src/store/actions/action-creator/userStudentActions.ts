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

export const followUser = (id: string) => ({
  type: UserStudentactiontypes.FOLLOW_USER,
  payload: {
    meta: {
      api: {
        method: "post",
        url: `/api/follow/${id}`,
      },
    },
  },
});

export const unFollowUser = (id: string) => ({
  type: UserStudentactiontypes.UNFOLLOW_USER,
  payload: {
    meta: {
      api: {
        method: "delete",
        url: `/api/unfollow/${id}`,
      },
    },
  },
});

export const getUserActivity = (id: string) => async (dispatch: Dispatch<Action>) => {

  try {
    dispatch({
      type: UserStudentactiontypes.FETCH_STUDENT_USER_ACTIVITY
    })

    const { data } = await Http.get(`/api/activities/${id}`);

    dispatch({
      type: UserStudentactiontypes.FETCH_STUDENT_USER_ACTIVITY_SUCCESS,
      payload: data.activities,
      total: data.total,
    })

  } catch (err: any) {
    dispatch({
      payload: err.message,
      type: UserStudentactiontypes.FETCH_STUDENT_USER_ACTIVITY_FAIL,
      status: err.status,
    })
  }
};

export const getSelfActivity = () => async (dispatch: Dispatch<Action>) => {

  try {
    dispatch({
      type: UserStudentactiontypes.FETCH_STUDENT_SELF_ACTIVITY
    })

    const { data } = await Http.get(`/api/activities`);

    dispatch({
      type: UserStudentactiontypes.FETCH_STUDENT_SELF_ACTIVITY_SUCCESS,
      payload: data.activities,
    })

  } catch (err: any) {
    dispatch({
      payload: err.message,
      type: UserStudentactiontypes.FETCH_STUDENT_SELF_ACTIVITY_FAIL,
      status: err.status,
    })
  }
};

