import { QuizAction } from "./quizActions";
import { UserAction } from "./userActions";
import { AuthAction } from "./authActions";
import { QuestionAction } from "./questionAction";
import { LayoutAction } from "./layoutActions";



export type Action =
  | QuizAction
  | UserAction
  | AuthAction
  | QuestionAction
  | LayoutAction;

