import { takeQuizStudentActionTypes } from '../action-types/';

export const getTakeQuizQuestion = (id: string) => ({
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_QUESTION,
  payload: {
    meta: {
      api: {
        method: "get",
        url: `/api/quiz/${id}/questions`,
      },
    },
  },
});

export const getTakeQuizData = (id: string) => ({
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_DATA,
  payload: {
    meta: {
      api: {
        method: "get",
        url: `/api/quizzes/${id}`,
      },
    },
  },
});

export const addUserAnswer = (data:object) =>({
  type: takeQuizStudentActionTypes.SET_STUDENT_USER_ANSWER,
  payload: data,
})

export const saveUserAnswers = (Data:any) => ({
  type: takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_DATA,
  payload: {
    meta: {
      api: {
        method: "post",
        url: `/api/useranswers`,
        data:Data,
      },
    },
  },
});

export const getUserAnswers = (id:string) =>({
  type: takeQuizStudentActionTypes.FETCH_STUDENT_ANSWER_DATA,
  payload: {
    meta: {
      api: {
        method: "get",
        url: `/api/useranswers/${id}`,
      },
    },
  },
});
