import Choices from './choicesModel';

type Question = {
  id?: number;
  word: string;
  quizId?: number,
  question_choices?: Choices[],
}

export default Question;

