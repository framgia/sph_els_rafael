import { FC } from 'react';

import Columns from "./QuizListColumns";
import Table from '@components/UI/Table/Table';
import Boxwidget from '@components/UI/Widget/Boxwidget/Boxwidget';
import IQuizData from 'types/quiz.type';
import Spinner from '@components/UI/Spinner/Spinner';

interface Props {
  loading: boolean;
  data: IQuizData[];
  action: () => void;
}

interface Props {
  action: () => void;
}

const QuizList: FC<Props> = ({ loading, data, action }) => {

  return (
    <>
      <Boxwidget
        action={action}
        title="Quizzes">
        {loading ? (
          <Spinner />
        ) : (
          <Table
            columns={Columns}
            data={data}
          />
        )}
      </Boxwidget>
    </>
  )
}

export default QuizList;

