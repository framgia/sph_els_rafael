import { QuizAction } from "./quizActions";
import { UserAction } from "./userActions";



export type Action =
  | QuizAction
  | UserAction;

