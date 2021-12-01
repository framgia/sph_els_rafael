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

interface FollowUserAction {
  type: UserStudentactiontypes.FOLLOW_USER
}

interface FollowUserSuccessAction {
  type: UserStudentactiontypes.FOLLOW_USER_SUCCESS,
}

interface FollowUserFailAction {
  type: UserStudentactiontypes.FOLLOW_USER_FAIL,
  payload: string
}

interface UnfollowUserAction {
  type: UserStudentactiontypes.UNFOLLOW_USER
}

interface UnfollowUserSuccessAction {
  type: UserStudentactiontypes.UNFOLLOW_USER_SUCCESS,
}

interface UnfollowUserFailAction {
  type: UserStudentactiontypes.UNFOLLOW_USER_FAIL,
  payload: string
}

export type StudentUserAction =
  | FetchStudentUserListAction
  | FetchStudentUserListSuccessAction
  | FetchStudentUserListFailAction
  | FetchStudentUserAction
  | FetchStudentUserSuccessAction
  | FetchStudentUserFailAction
  | FollowUserAction
  | FollowUserSuccessAction
  | FollowUserFailAction
  | UnfollowUserAction
  | UnfollowUserSuccessAction
  | UnfollowUserFailAction;

