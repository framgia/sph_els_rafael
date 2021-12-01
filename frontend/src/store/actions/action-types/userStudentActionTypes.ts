enum UserStudentAction {
  FETCH_STUDENT_USER_LIST = "[FETCH_STUDENT_USER_LIST] - fetch student userlist",
  FETCH_STUDENT_USER_LIST_SUCCESS = "[FETCH_STUDENT_USER_LIST] - fetch student userlist success",
  FETCH_STUDENT_USER_LIST_FAIL = "[FETCH_STUDENT_USER_LIST] - fetch student userlist error",

  FETCH_STUDENT_USER = "[FETCH_STUDENT_USER] - fetch student user",
  FETCH_STUDENT_USER_SUCCESS = "[FETCH_STUDENT_USER] - fetch student user success",
  FETCH_STUDENT_USER_FAIL = "[FETCH_STUDENT_USER] - fetch student user error",

  FOLLOW_USER = "[FOLLOW_USER] - follow user",
  FOLLOW_USER_SUCCESS = "[FOLLOW_USER] - follow user success",
  FOLLOW_USER_FAIL = "[FOLLOW_USER] - follow user error",

  UNFOLLOW_USER = "[UNFOLLOW_USER] - unfollow user",
  UNFOLLOW_USER_SUCCESS = "[UNFOLLOW_USER] - unfollow user success",
  UNFOLLOW_USER_FAIL = "[UNFOLLOW_USER] - unfollow user error",

  FETCH_STUDENT_USER_ACTIVITY = "[FETCH_STUDENT_USER_ACTIVITY] - fetch student activity user",
  FETCH_STUDENT_USER_ACTIVITY_SUCCESS = "[FETCH_STUDENT_USER_ACTIVITY] - fetch student activity user success",
  FETCH_STUDENT_USER_ACTIVITY_FAIL = "[FETCH_STUDENT_USER_ACTIVITY] - fetch student activity user error",

  FETCH_STUDENT_SELF_ACTIVITY = "[FETCH_STUDENT_SELF_ACTIVITY] - fetch student activity self",
  FETCH_STUDENT_SELF_ACTIVITY_SUCCESS = "[FETCH_STUDENT_SELF_ACTIVITY] - fetch student activity self success",
  FETCH_STUDENT_SELF_ACTIVITY_FAIL = "[FETCH_STUDENT_SELF_ACTIVITY] - fetch student activity self error",
}

export default UserStudentAction;
