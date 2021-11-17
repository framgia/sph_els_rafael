import { FC } from 'react';

interface Props {
  isCorrect: boolean;
  choice: string;
}

const Choices: FC<Props> = ({ isCorrect, choice }) => {
  return (
    <div className={`rounded-full  text-center 
    text-white mb-2 px-2 py-1 
    ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
      {choice}
    </div>
  )
}

export default Choices;
