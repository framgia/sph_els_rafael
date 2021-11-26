import { QuizAction } from "./quizActions";
import { UserAction } from "./userActions";
import { AuthAction } from "./authActions";
import { QuestionAction } from "./questionAction";
import { LayoutAction } from "./layoutActions";
import { StudentQuizAction } from './quizStudentActions';
import {TakeQuizAction} from './takeQuestionActions';

export type Action =
  | QuizAction
  | UserAction
  | AuthAction
  | QuestionAction
  | LayoutAction
  | StudentQuizAction
  | TakeQuizAction;

