import { QuestionActionType } from '../action-types/';

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

