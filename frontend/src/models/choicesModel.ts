import Question from './questionModel'

type Choice = {
  id?: number;
  choice: string;
  isCorrect: boolean;
  questionId?: number;
  questions?: Question;
}

export default Choice;
