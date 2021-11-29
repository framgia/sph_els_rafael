import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import UserProfileDetail from '../UserProfile/UserProfileDetail';
import LearnWords from './LearnWords';
import UserData from '@model/userModels'
import { RootState } from '@store/reducers'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getUserStudent,
} from '@store/actions/action-creator/';
import Spinner from '@components/UI/Spinner/Spinner';

type Props = LinkStateProps & LinkDispatchProps;

const UserLearnWords: FC<Props> = ({ getUser, userData, loading }) => {
  const { id } = useParams<any>();
  const { fname, lname } = (userData && userData) || {};

  useEffect(() => {
    getUser(id);
  }, [])

  return (
    <div className="text-white grid gap-2 m-10 lg:grid-cols-3">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <UserProfileDetail fname={fname || ""} lname={lname || ""} />
          <LearnWords />
        </>
      )}

    </div>
  )
}

interface LinkStateProps {
  userData: UserData | null,
  loading: boolean,
}

interface LinkDispatchProps {
  getUser: (id: string) => void;

}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  userData: state.userStudent.userDetail,
  loading: state.userStudent.userLoading
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
  getUser: bindActionCreators(getUserStudent, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserLearnWords);
