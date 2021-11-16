import { QuizActionType } from '../action-types/';

export const getQuizList = () => ({
  //AND IT ALSO MAKES THE CALL TO OUR BACK END
  type: QuizActionType.FETCH_QUIZ_LIST,
  payload: {
    meta: {
      api: {
        method: "get",
        url: "/api/quizzes",
      },
    },
  },
});

export const editQuizAdminModal = (data: object | null) => ({
  type: QuizActionType.EDIT_QUIZ_ADMIN_MODAL,
  payload: data,
});

export const saveQuizData = (Data: FormData | null) => ({
  type: QuizActionType.SAVE_QUIZ_DATA,
  payload: {
    meta: {
      api: {
        method: "post",
        url: "/api/quizzes",
        data: Data,
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        }
      },
    },
  },
})

export const updateQuizData = (Data: any, id: string) => ({
  type: QuizActionType.UPDATE_QUIZ_DATA,
  payload: {
    meta: {
      api: {
        method: "put",
        url: `/api/quizzes/${id}`,
        data: Data,
      },
    },
  },
})


export const deleteQuizData = (id: string) => ({
  type: QuizActionType.DELETE_QUIZ_DATA,
  payload: {
    meta: {
      api: {
        method: "delete",
        url: `/api/quizzes/${id}`,
      },
    },
  },
})

