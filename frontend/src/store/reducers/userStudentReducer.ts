import { UserStudentactiontypes } from '../actions/action-types/';
import { Action } from '../actions'
import User from "models/userModels";

interface QuizState {
  userlist: User[] | null;
  userTotal: number;
  userListLoading: boolean;
  error: string | null;
  isSuccess: boolean;
  SaveLoading: boolean,
}

export const initialState = {
  userlist: [],
  userTotal: 0,
  userListLoading: false,
  error: null,
  isSuccess: false,
  SaveLoading: false,
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
    default:
      return state;
  }
}

export default reducer;
