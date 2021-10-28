import { FC, useState } from 'react';

import Columns from "./QuizListColumns";
import Table from '@components/UI/Table/Table';
import Boxwidget from '@components/UI/Widget/Boxwidget/Boxwidget';

interface Props {
  action: () => void;
}

const QuizList: FC<Props> = ({ action }) => {

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
        action={action}
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

