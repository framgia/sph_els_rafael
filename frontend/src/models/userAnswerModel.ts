import Question from "./questionModel";
import QuestionChoices from "./choicesModel";

type UserAnswer = {
  id?: number;
  user_id?: number;
  question_id: number;
  question_choice_id: number;
  question?: Question;
  question_choice?: QuestionChoices;
};

export default UserAnswer;
