import Choices from './choicesModel';

type Question = {
  id?: number;
  word: string;
  quizId?: number,
  choices?: Choices[],
}

export default Question;

