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

export type StudentUserAction =
  | FetchStudentUserListAction
  | FetchStudentUserListSuccessAction
  | FetchStudentUserListFailAction

