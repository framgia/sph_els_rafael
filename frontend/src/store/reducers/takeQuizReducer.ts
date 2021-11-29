import { takeQuizStudentActionTypes } from '../actions/action-types/';
import { Action } from '../actions'
import Question from "@model/questionModel";
import { shuffle} from '../utilities'
import Quiz from "@model/quizModels";
import UserAnswer from '@model/userAnswerModel'


interface QuestionState {
  checkAnswers: UserAnswer[],
  answersLoading:boolean,
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
  checkAnswers:[],
  answersLoading:false,
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
          checkAnswers:[],
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
          case takeQuizStudentActionTypes.FETCH_STUDENT_ANSWER_DATA:
            return {
              ...state,
              answersLoading: true,
            };
          case takeQuizStudentActionTypes.FETCH_STUDENT_ANSWER_DATA_SUCCESS:
            return {
              ...state,
              checkAnswers:action.payload,
              answersLoading:false,
            }
          case takeQuizStudentActionTypes.FETCH_STUDENT_ANSWER_DATA_FAIL:
            return {
              ...state,
              answersLoading: false,
              error: action.payload
            }      
      default:
        return state;
    }
  }

export default reducer;
