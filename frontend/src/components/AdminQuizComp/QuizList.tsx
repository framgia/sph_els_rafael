import { FC } from 'react';

import Columns from "./QuizListColumns";
import Table from '@components/UI/Table/Table';
import Boxwidget from '@components/UI/Widget/Boxwidget/Boxwidget';
import Quiz from '../../models/quizModels';
import Spinner from '@components/UI/Spinner/Spinner';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '../../store/actions/index'
import { bindActionCreators } from 'redux';
import { editQuizAdminModal } from '../../store/actions/action-creator/'
import { connect } from 'react-redux'

interface RProps {
  loading: boolean;
  data: Quiz[] | null;
}

type Props = RProps & LinkDispatchProps;

const QuizList: FC<Props> = ({ loading, data, editQuizAdminModal }) => {

  return (
    <>
      <Boxwidget
        action={() => editQuizAdminModal({})}
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

interface LinkDispatchProps {
  editQuizAdminModal: (data: object) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: RProps): LinkDispatchProps => ({

  editQuizAdminModal: bindActionCreators(editQuizAdminModal, dispatch)
})

export default connect(null, mapDispatchToProps)(QuizList)

