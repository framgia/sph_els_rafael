import { QuestionActionType } from '../action-types/';
import Question from '@model/questionModel'


export const getQuestionList = (id: string) => ({
  type: QuestionActionType.FETCH_QUESTION_LIST,
  payload: {
    meta: {
      api: {
        method: "get",
        url: `/api/quiz/${id}/questions`,
      },
    },
  },
});

export const getQuizData = (id: string) => ({
  type: QuestionActionType.FETCH_QUIZ_DATA,
  payload: {
    meta: {
      api: {
        method: "get",
        url: `/api/quizzes/${id}`,
      },
    },
  },
});

export const editQuestionModal = (data: object | null) => ({
  type: QuestionActionType.EDIT_QUESTION_MODAL,
  payload: data,
});

export const saveQuestionData = (Data: Question, id: string) => ({
  type: QuestionActionType.SAVE_QUESTION_DATA,
  payload: {
    meta: {
      api: {
        method: "post",
        url: `/api/quiz/${id}/question`,
        data: Data,
      },
    },
  },
})


