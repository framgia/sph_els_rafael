import { QuizStudentActionTypes } from '../action-types/';
import { Dispatch } from 'redux';
import Http from '../../../http-common';
import { Action } from '../';
import { AxiosError } from 'axios';

export const getStudentQuizList = (page : number = 1) => async (dispatch: Dispatch<Action>) => {

  try {
    dispatch({
      type: QuizStudentActionTypes.FETCH_STUDENT_QUIZ_LIST
    })

    const { data } = await Http.get(`/api/quizzes?page=${page}`);

    dispatch({
      type: QuizStudentActionTypes.FETCH_STUDENT_QUIZ_LIST_SUCCESS,
      payload: data.data,
      total:data.total,
    })

  } catch (err: any) {
    dispatch({
      payload: err.message,
      type: QuizStudentActionTypes.FETCH_STUDENT_QUIZ_LIST_FAIL,
      status: err.status,
    })
  }
};
