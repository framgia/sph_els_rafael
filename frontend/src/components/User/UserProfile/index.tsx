import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import UserProfileDetail from './UserProfileDetail';
import Activities from '@components/Activities';
import UserData from '@model/userModels';
import UserActivity from '@model/userActivityModel';
import { RootState } from '@store/reducers'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getUserStudent,
  getUserActivity
} from '@store/actions/action-creator/';
import Spinner from '@components/UI/Spinner/Spinner';

type Props = LinkStateProps & LinkDispatchProps;

const Profile: FC<Props> = ({
  getUser, userData,
  loading, UserActivity,
  getActivity, activityLoading }) => {
  const { id } = useParams<any>();

  const { fname,
    lname, followers,
    followings, user_learn_words, photo } = (userData && userData) || {};

  useEffect(() => {
    getUser(id);
    getActivity(id);
  }, [id])

  return (
    <div className="text-white grid gap-2 m-10 lg:grid-cols-3">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <UserProfileDetail
            fname={fname || ""}
            lname={lname || ""}
            followers={followers}
            following={followings}
            photo={photo}
            totalLearnWords={user_learn_words?.length} />
          <Activities loading={activityLoading} activities={UserActivity} />
        </>
      )}
    </div>
  );
}

interface LinkStateProps {
  userData: UserData | null,
  UserActivity: UserActivity[],
  loading: boolean,
  activityLoading: boolean,
}

interface LinkDispatchProps {
  getUser: (id: string) => void;
  getActivity: (id: string) => void;
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  userData: state.userStudent.userDetail,
  loading: state.userStudent.userLoading,
  UserActivity: state.userStudent.activities,
  activityLoading: state.userStudent.activityLoading,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
  getUser: bindActionCreators(getUserStudent, dispatch),
  getActivity: bindActionCreators(getUserActivity, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
