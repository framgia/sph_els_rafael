import { FC, useState } from 'react';

import Columns from "./QuizListColumns";
import Table from '@components/UI/Table/Table';


const QuizList: FC = () => {
  const [people, setPeople] = useState([
    {
      title: "Basic 500",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Basic 500",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Basic 500",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Basic 500",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Basic 500",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Basic 500",
      description: "Lorem ipsum dolor sit amet.",
    },

    {
      title: "Basic 500",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Basic 500",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Basic 500",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Basic 500",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Basic 500",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Basic 500",
      description: "Lorem ipsum dolor sit amet.",
    },
  ]);



  return (
    <>
      <div className="h-full  bg-gray-700 rounded-lg border-white  m-5">
        <div className="border-t text-white bg-gray-800 p-5">
          <h2>QUIZZES</h2>
        </div>
        <div className="p-5">
          <Table
            columns={Columns}
            data={people}
          />
        </div>
      </div>
    </>
  )
}

export default QuizList;

