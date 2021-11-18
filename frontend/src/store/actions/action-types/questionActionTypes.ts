enum QuestionActionTypes {
  FETCH_QUESTION_LIST = "[FETCH_QUESTION_LIST] - fetch questionlist",
  FETCH_QUESTION_LIST_SUCCESS = "[FETCH_QUESTION_LIST] - fetch questionlist success",
  FETCH_QUESTION_LIST_FAIL = "[FETCH_QUESTION_LIST] - fetch questionlist error",

  FETCH_QUIZ_DATA = "[FETCH_QUIZ_DATA] - fetch quiz data",
  FETCH_QUIZ_DATA_SUCCESS = "[FETCH_QUIZ_DATA] - fetch quiz data success",
  FETCH_QUIZ_DATA_FAIL = "[FETCH_QUIZ_DATA] - fetch quiz data error",

  EDIT_QUESTION_MODAL = "[EDIT_QUESTION_MODAL] - edit question admin modal",

  SAVE_QUESTION_DATA = "[SAVE_QUESTION_DATA] - save question data",
  SAVE_QUESTION_DATA_SUCCESS = "[SAVE_QUESTION_DATA] - save question data success",
  SAVE_QUESTION_DATA_ERROR = "[SAVE_QUESTION_DATA] - save question data error",

  UPDATE_QUESTION_DATA = "[UPDATE_QUESTION_DATA] - update question data",
  UPDATE_QUESTION_DATA_SUCCESS = "[UPDATE_QUESTION_DATA] - update question data success",
  UPDATE_QUESTION_DATA_ERROR = "[UPDATE_QUESTION_DATA] - update question data error",

  DELETE_QUESTION_DATA = "[DELETE_QUESTION_DATA] - delete question data",
  DELETE_QUESTION_DATA_SUCCESS = "[DELETE_QUESTION_DATA] - delete question data success",
  DELETE_QUESTION_DATA_ERROR = "[DELETE_QUESTION_DATA] - delete question data error",
}

export default QuestionActionTypes;
