import { QuizStudentActionTypes } from '../actions/action-types/';
import { Action } from '../actions'
import Quiz from "models/quizModels";

interface QuizState {
  quizList: Quiz[] | null;
  quizTotal:number;
  quizListloading: boolean;
  error: string | null;
  isSuccess: boolean;
  SaveLoading: boolean,
}

export const initialState = {
  quizList: [],
  quizTotal:0,
  quizListloading: false,
  error: null,
  isSuccess: false,
  SaveLoading: false,
};


const reducer = (
    state: QuizState = initialState,
    action: Action): QuizState => {
  
    switch (action.type) {
      case QuizStudentActionTypes.FETCH_STUDENT_QUIZ_LIST:
        return {
          ...state,
          quizListloading: true,
        };
      case QuizStudentActionTypes.FETCH_STUDENT_QUIZ_LIST_SUCCESS:
        return {
          ...state,
          quizListloading: false,
          quizList: action.payload,
          quizTotal:action.total,
        }
      case QuizStudentActionTypes.FETCH_STUDENT_QUIZ_LIST_FAIL:
        return {
          ...state,
          quizListloading: false,
          error: action.payload
        }
      default:
        return state;
    }
  }
  
export default reducer;
