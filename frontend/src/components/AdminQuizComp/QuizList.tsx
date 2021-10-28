import { FC, useState } from 'react';

import Columns from "./QuizListColumns";
import Table from '@components/UI/Table/Table';
import Boxwidget from '@components/UI/Widget/Boxwidget/Boxwidget';


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
      <Boxwidget
        title="Quizzes">
        <Table
          columns={Columns}
          data={people}
        />
      </Boxwidget>
    </>
  )
}

export default QuizList;

