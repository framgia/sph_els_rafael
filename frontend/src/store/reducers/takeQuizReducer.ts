import { takeQuizStudentActionTypes } from '../actions/action-types/';
import { Action } from '../actions'
import Question from "@model/questionModel";
import { shuffle} from '../utilities'
import Quiz from "@model/quizModels";


interface QuestionState {
  quizData: Quiz | null,
  quizDataLoading: boolean,
  questionList: Question[];
  userAnswers:{}[];
  questionListloading: boolean;
  error: string | null;
  isSuccess: boolean;
  editQuestionDetails: Question | null;
  SaveLoading: boolean,
}

export const initialState = {
  quizData: null,
  quizDataLoading: false,
  questionList: [],
  userAnswers: [],
  questionListloading: false,
  error: null,
  editQuestionDetails: null,
  isSuccess: false,
  SaveLoading: false,
};

const reducer = (
    state: QuestionState = initialState,
    action: Action): QuestionState => {
  
    switch (action.type) {
      case takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_QUESTION:
        return {
          ...state,
          questionListloading: true,
          userAnswers: [],
        };
      case takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_QUESTION_SUCCESS:
        return {
          ...state,
          questionListloading: false,
          questionList: shuffle([...action.payload])
        }
      case takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_QUESTION_FAIL:
        return {
          ...state,
          questionListloading: false,
          error: action.payload
        }
      case takeQuizStudentActionTypes.SET_STUDENT_USER_ANSWER:
        return{
          ...state,
          userAnswers: [...state.userAnswers,action.payload]
        }
        case takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_DATA:
          return {
            ...state,
            quizDataLoading: true,
          };
        case takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_DATA_SUCCESS:
          return {
            ...state,
            quizDataLoading: false,
            quizData: action.payload
          }
        case takeQuizStudentActionTypes.FETCH_STUDENT_QUIZ_DATA_FAIL:
          return {
            ...state,
            quizDataLoading: false,
            error: action.payload
          }    
      default:
        return state;
    }
  }

  export default reducer;
