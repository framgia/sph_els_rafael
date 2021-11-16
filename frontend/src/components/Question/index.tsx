import { FC } from 'react';
import QuizDetails from './QuizDetails';
import QuestionList from './QuestionList';

const Question: FC = () => {

  return (
    <div className="container-fluid grid gap-2 m-10 lg:grid-cols-3 lg:w-full">
      <div className="flex flex-col  mt-5">
        <div className="bg-gray-700 rounde-lg lg:h-150 overflow-y-auto">
          <QuizDetails />
        </div>
      </div>
      <div className="col-span-2 mr-10">
        <QuestionList />
      </div>
    </div>
  )
}

export default Question;
