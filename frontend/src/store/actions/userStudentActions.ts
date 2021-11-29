import User from "models/userModels";
import { UserStudentactiontypes } from "./action-types";

interface FetchStudentUserListAction {
  type: UserStudentactiontypes.FETCH_STUDENT_USER_LIST
}

interface FetchStudentUserListSuccessAction {
  type: UserStudentactiontypes.FETCH_STUDENT_USER_LIST_SUCCESS,
  payload: User[],
  total: number,
}

interface FetchStudentUserListFailAction {
  type: UserStudentactiontypes.FETCH_STUDENT_USER_LIST_FAIL,
  payload: string
}

interface FetchStudentUserAction {
  type: UserStudentactiontypes.FETCH_STUDENT_USER
}

interface FetchStudentUserSuccessAction {
  type: UserStudentactiontypes.FETCH_STUDENT_USER_SUCCESS,
  payload: User,
}

interface FetchStudentUserFailAction {
  type: UserStudentactiontypes.FETCH_STUDENT_USER_FAIL,
  payload: string
}

export type StudentUserAction =
  | FetchStudentUserListAction
  | FetchStudentUserListSuccessAction
  | FetchStudentUserListFailAction
  | FetchStudentUserAction
  | FetchStudentUserSuccessAction
  | FetchStudentUserFailAction;

