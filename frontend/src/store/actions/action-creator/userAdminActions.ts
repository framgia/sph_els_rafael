import { UserAdminQuiz } from '../action-types/';

export const getUserList = () => ({
  type: UserAdminQuiz.FETCH_USER_LIST,
  payload: {
    meta: {
      api: {
        method: "get",
        url: "/users",
      },
    },
  },
});

export const editUserAdminModal = (data: object | null) => ({
  type: UserAdminQuiz.EDIT_USER_MODAL,
  payload: data,
});

export const saveUserData = (Data: FormData | null) => ({
  type: UserAdminQuiz.SAVE_USER_DATA,
  payload: {
    meta: {
      api: {
        method: "post",
        url: "/users",
        data: Data,
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      },
    },
  },
})

export const updateUserData = (Data: any, id: string) => ({
  type: UserAdminQuiz.UPDATE_USER_DATA,
  payload: {
    meta: {
      api: {
        method: "put",
        url: `/users/${id}`,
        data: Data,
      },
    },
  },
})


export const deleteUserData = (id: string) => ({
  type: UserAdminQuiz.DELETE_USER_DATA,
  payload: {
    meta: {
      api: {
        method: "delete",
        url: `/users/${id}`,
      },
    },
  },
})

