import { useEffect, FC } from 'react'
import Userlist from './UserList'
import { connect } from 'react-redux'
import { getUserList, editUserAdminModal } from '@store/actions/action-creator/'
import User from 'models/userModels';
import { RootState } from '@store/reducers'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import { bindActionCreators } from 'redux';

type Props = LinkStateProps & LinkDispatchProps;

const UserAdmin: FC<Props> = ({ getUserList, userList, loading, editQuizAdminModal, editUserListData }) => {
  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Userlist
      data={userList}
      loading={loading}
    />
  )
}

interface LinkStateProps {
  userList: User[] | null,
  loading: boolean,
  editUserListData: object | null,
}

interface LinkDispatchProps {
  getUserList: () => void;
  editQuizAdminModal: (data: object) => void;
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  userList: state.users.userList.map((user) => ({
    ...user,
    rolestring: user.role === 1 ? "Admin" : "Students",
  })),
  loading: state.users.userListloading,
  editUserListData: state.users.editUserDetails,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
  getUserList: bindActionCreators(getUserList, dispatch),
  editQuizAdminModal: bindActionCreators(editUserAdminModal, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAdmin);

