import { FC } from 'react'
import Boxwidget from '@components/UI/Widget/Boxwidget/Boxwidget';
import Table from '@components/UI/Table/Table';
import QuestionColumns from './QuestionColumns';

const QuestionList: FC = () => {
  return (
    <Boxwidget
      btnName="Add Question"
      title="Question">
      <Table columns={QuestionColumns} data={[]} />
    </Boxwidget>
  )
}

export default QuestionList;
