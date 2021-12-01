import { UserStudentactiontypes } from '../actions/action-types/';
import { Action } from '../actions'
import User from "models/userModels";
import Activity from "models/userActivityModel";

interface QuizState {
  userlist: User[] | null;
  activities: Activity[];
  selfActivity: Activity[];
  userLoading: boolean;
  activityLoading: boolean;
  userDetail: User | null;
  userTotal: number;
  followLoading: boolean;
  userListLoading: boolean;
  error: string | null;
}

export const initialState = {
  userlist: [],
  activities: [],
  selfActivity: [],
  userDetail: null,
  userTotal: 0,
  userLoading: false,
  userListLoading: false,
  followLoading: false,
  activityLoading: false,
  error: null,
};


const reducer = (
  state: QuizState = initialState,
  action: Action): QuizState => {

  switch (action.type) {
    case UserStudentactiontypes.FETCH_STUDENT_USER_LIST:
      return {
        ...state,
        userListLoading: true,
      };
    case UserStudentactiontypes.FETCH_STUDENT_USER_LIST_SUCCESS:
      return {
        ...state,
        userListLoading: false,
        userlist: action.payload,
        userTotal: action.total,
      }
    case UserStudentactiontypes.FETCH_STUDENT_USER_LIST_FAIL:
      return {
        ...state,
        userListLoading: false,
        error: action.payload
      }
    case UserStudentactiontypes.FETCH_STUDENT_USER:
      return {
        ...state,
        userLoading: true,
      };
    case UserStudentactiontypes.FETCH_STUDENT_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        userDetail: action.payload
      }
    case UserStudentactiontypes.FETCH_STUDENT_USER_FAIL:
      return {
        ...state,
        userLoading: false,
        error: action.payload
      }
    case UserStudentactiontypes.FOLLOW_USER:
      return {
        ...state,
        followLoading: true,
      };
    case UserStudentactiontypes.FOLLOW_USER_SUCCESS:
      return {
        ...state,
        followLoading: false,
      }
    case UserStudentactiontypes.FOLLOW_USER_FAIL:
      return {
        ...state,
        followLoading: false,
        error: action.payload
      }
    case UserStudentactiontypes.UNFOLLOW_USER:
      return {
        ...state,
        followLoading: true,
      };
    case UserStudentactiontypes.UNFOLLOW_USER_SUCCESS:
      return {
        ...state,
        followLoading: false,
      }
    case UserStudentactiontypes.UNFOLLOW_USER_FAIL:
      return {
        ...state,
        followLoading: false,
        error: action.payload
      }
    case UserStudentactiontypes.FETCH_STUDENT_USER_ACTIVITY:
      return {
        ...state,
        activityLoading: true,
      };
    case UserStudentactiontypes.FETCH_STUDENT_USER_ACTIVITY_SUCCESS:
      return {
        ...state,
        activityLoading: false,
        activities: action.payload
      }
    case UserStudentactiontypes.FETCH_STUDENT_USER_ACTIVITY_FAIL:
      return {
        ...state,
        activityLoading: false,
        error: action.payload
      }

    case UserStudentactiontypes.FETCH_STUDENT_SELF_ACTIVITY:
      return {
        ...state,
        activityLoading: true,
      };
    case UserStudentactiontypes.FETCH_STUDENT_SELF_ACTIVITY_SUCCESS:
      return {
        ...state,
        activityLoading: false,
        selfActivity: action.payload
      }
    case UserStudentactiontypes.FETCH_STUDENT_SELF_ACTIVITY_FAIL:
      return {
        ...state,
        activityLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
