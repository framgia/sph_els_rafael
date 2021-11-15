import { QuizAction } from "./quizActions";
import { UserAction } from "./userActions";
import { AuthAction } from "./authActions";



export type Action =
  | QuizAction
  | UserAction
  | AuthAction;

