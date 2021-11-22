import { FC } from 'react'
import Table from '@components/UI/Table/Table';
import Boxwidget from '@components/UI/Widget/Boxwidget/Boxwidget';
import Columns from "./UserColumns";
import User from 'models/userModels';
import Spinner from '@components/UI/Spinner/Spinner'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import { bindActionCreators } from 'redux';
import { editUserAdminModal } from '@store/actions/action-creator/'
import { connect } from 'react-redux'

interface RProps {
  loading: boolean;
  data: User[] | null;
}

type Props = RProps & LinkDispatchProps;

const UserList: FC<Props> = ({ data, loading, editModal }) => {
  return (
    <Boxwidget
      action={() => editModal({})}
      title="Users"
      btnName="Add User">
      {loading ? (
        <Spinner />
      ) : (
        <Table
          columns={Columns}
          data={data}
        />
      )}
    </Boxwidget>
  )
}

interface LinkDispatchProps {
  editModal: (data: object) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: RProps):
  LinkDispatchProps => ({
    editModal: bindActionCreators(editUserAdminModal, dispatch)
  })

export default connect(null, mapDispatchToProps)(UserList);

