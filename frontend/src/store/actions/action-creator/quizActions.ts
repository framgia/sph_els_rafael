import ActionType from '../../actions/action-types';

export const getQuizList = () => ({
  //AND IT ALSO MAKES THE CALL TO OUR BACK END
  type: ActionType.FETCH_QUIZ_LIST,
  payload: {
    meta: {
      api: {
        method: "get",
        url: "/quizzes",
      },
    },
  },
});

export const editQuizAdminModal = (data: object | null) => ({
  type: ActionType.EDIT_QUIZ_ADMIN_MODAL,
  payload: data,
});

export const saveQuizData = (Data: FormData | null) => ({
  type: ActionType.SAVE_QUIZ_DATA,
  payload: {
    meta: {
      api: {
        method: "post",
        url: "/quizzes",
        data: Data,
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      },
    },
  },
})

export const updateQuizData = (Data: any, id: string) => ({
  type: ActionType.UPDATE_QUIZ_DATA,
  payload: {
    meta: {
      api: {
        method: "put",
        url: `/quizzes/${id}`,
        data: Data,
      },
    },
  },
})


export const deleteQuizData = (id: string) => ({
  type: ActionType.DELETE_QUIZ_DATA,
  payload: {
    meta: {
      api: {
        method: "delete",
        url: `/quizzes/${id}`,
      },
    },
  },
})

