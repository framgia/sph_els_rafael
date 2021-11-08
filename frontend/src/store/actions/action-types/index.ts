enum ActionType {
  FETCH_QUIZ_LIST = "[FETCH_QUIZ_LIST] - fetch quizlist",
  FETCH_QUIZ_LIST_SUCCESS = "[FETCH_QUIZ_LIST] - fetch quizlist success",
  FETCH_QUIZ_LIST_FAIL = "[FETCH_QUIZ_LIST] - fetch quizlist error",

  SAVE_QUIZ_DATA = "[SAVE_QUIZ_DATA] - save quiz data",
  SAVE_QUIZ_DATA_SUCCESS = "[SAVE_QUIZ_DATA] - save quiz data success",
  SAVE_QUIZ_DATA_ERROR = "[SAVE_QUIZ_DATA] - save quiz data error",

  EDIT_QUIZ_ADMIN_MODAL = "[EDIT_QUIZ_ADMIN_MODAL] - edit quiz admin modal",

  UPDATE_QUIZ_DATA = "[UPDATE_QUIZ_DATA] - update quiz data",
  UPDATE_QUIZ_DATA_SUCCESS = "[UPDATE_QUIZ_DATA] - update quiz data success",
  UPDATE_QUIZ_DATA_FAIL = "[UPDATE_QUIZ_DATA] - update quiz data error",

  DELETE_QUIZ_DATA = "[DELETE_QUIZ_DATA] - delete quiz data",
  DELETE_QUIZ_DATA_SUCCESS = "[DELETE_QUIZ_DATA] - delete quiz data success",
  DELETE_QUIZ_DATA_FAIL = "[DELETE_QUIZ_DATA] - delete quiz data error",

}

export default ActionType;

