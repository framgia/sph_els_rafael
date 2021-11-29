import Choice from './choicesModel';

type LearnWord = {
  id?: string;
  user_id?: string;
  question_choice_id: number;
  question_choice: Choice;
}

export default LearnWord;
