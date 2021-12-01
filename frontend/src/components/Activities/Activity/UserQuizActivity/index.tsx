import { FC } from 'react';

interface Props {
  title: string;
  question_choices: {}[];
  questions: {}[];
}

const UserFollowActivity: FC<Props> = ({ title, question_choices, questions }) => {
  return (
    <span>
      Learned {question_choices.length} of {questions.length}  words in
      <a className="ml-2 underline mr-2 hover:cursor-pointer capitalize">
        {title}</a>
    </span>
  )
}

export default UserFollowActivity;
