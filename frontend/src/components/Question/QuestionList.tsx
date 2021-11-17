import { FC } from 'react'
import Boxwidget from '@components/UI/Widget/Boxwidget/Boxwidget';
import Table from '@components/UI/Table/Table';
import QuestionColumns from './QuestionColumns';
import Questions from '@model/questionModel';
import { Action } from '../../store/actions/index'
import { bindActionCreators } from 'redux';
import { editQuestionModal } from '../../store/actions/action-creator/'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Spinner from '@components/UI/Spinner/Spinner';

interface RProps {
  loading: boolean;
  data: Questions[] | null;
}

type Props = RProps & LinkDispatchProps;

const QuestionList: FC<Props> = ({ loading, data, openModal }) => {
  return (
    <Boxwidget
      btnName="Add Question"
      title="Question"
      action={() => openModal({})}>
      {loading ? (
        <Spinner />
      ) : (
        <Table columns={QuestionColumns} data={data} />
      )}
    </Boxwidget>
  )
}

interface LinkDispatchProps {
  openModal: (data: object) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: RProps): LinkDispatchProps => ({

  openModal: bindActionCreators(editQuestionModal, dispatch)
})

export default connect(null, mapDispatchToProps)(QuestionList);
