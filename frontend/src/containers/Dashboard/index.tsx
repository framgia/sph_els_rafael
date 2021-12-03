import { FC, useEffect } from 'react';
import Activities from '@components/Activities';
import UserDetail from '@components/User/UserDetail';
import { connect } from 'react-redux'
import { getSelfActivity } from '@store/actions/action-creator/';
import { Action } from '@store/actions/index'
import { RootState } from '@store/reducers'
import { ThunkDispatch } from 'redux-thunk';
import User from '@model/userModels';
import Spinner from '@components/UI/Spinner/Spinner';
import { bindActionCreators } from 'redux';
import UserActivity from '@model/userActivityModel';

type Props = LinkStateProps & LinkDispatchProps;

const Dashboard: FC<Props> = ({
  user, quizTaken,
  learnWords, loading,
  getActivity, UserActivity,
  loadingActivity }) => {
  useEffect(() => {
    getActivity();
  }, [])

  return (
    <div className="text-white grid gap-2 m-10 lg:grid-cols-3">
      {loading ? (<Spinner />) : user && (
        <UserDetail
          fname={user?.fname}
          lname={user?.lname}
          totalQuiz={quizTaken.length}
          totalWords={learnWords.length}
          displayPic={user.photo} />
      )}
      <Activities loading={loadingActivity} activities={UserActivity} />
    </div>
  )
}

interface LinkStateProps {
  user: User | null,
  quizTaken: {}[],
  learnWords: {}[],
  loading: boolean,
  UserActivity: UserActivity[],
  loadingActivity: boolean;
}

interface LinkDispatchProps {
  getActivity: () => void;

}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  user: state.auth.user,
  quizTaken: state.auth.quizzesTaken,
  learnWords: state.auth.userLearnWords,
  loading: state.auth.loading,
  UserActivity: state.userStudent.selfActivity,
  loadingActivity: state.userStudent.activityLoading,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
  getActivity: bindActionCreators(getSelfActivity, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
