import { FC } from 'react';

interface UserLearnWord {
  wordLearn: string;
  answer: string;
}


const Learnword: FC<UserLearnWord> = ({ wordLearn, answer }) => {

  return (<>
    <div>{wordLearn}</div>
    <div>{answer}</div>
  </>)
}

export default Learnword;
