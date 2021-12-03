import { FC, useEffect, useState } from 'react';
import User from '@model/userModels'
import classes from './UserDetail.module.css';
import { Link } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  followUser,
  unFollowUser
} from '@store/actions/action-creator/';
import { RootState } from '@store/reducers';
import SpinnerButton from '@components/SVG/SpinnerBtn';
import { displayImage } from '../../../Utils';

type Props = User & LinkDispatchProps & LinkStateProps;

const UserDetail: FC<Props> = ({
  fname, lname,
  id, followers,
  follow, unFollow,
  loading, photo }) => {
  const studentId = localStorage.getItem('userid');

  const [isFollowedState, setIsFollowedState] = useState(false);

  useEffect(() => {
    if (!followers)
      return;

    const isFollowed = followers && followers.some((user: any) => {
      return Number(user.id) === Number(studentId);
    });

    setIsFollowedState(isFollowed);
  }, [followers])

  const followAction = () => {
    isFollowedState ?
      id && unFollow(id) : id && follow(id);
    setIsFollowedState(currentState => !currentState);
  }

  return (
    <div className={classes.userCard}>
      <img
        src={displayImage(photo, fname, lname)}
        className={classes.userCardImg} alt="display pic" />
      <h2 className={classes.userCardName}>
        <Link to={`/profile/${id}`}>{`${fname} ${lname}`}</Link></h2>
      <button disabled={loading} onClick={() => followAction()} className={classes.userCardAction}>
        {loading && <SpinnerButton />}
        {isFollowedState ? 'UNFOLLOW' : 'FOLLOW'}
      </button>
    </div>
  )
}

interface LinkStateProps {
  loading: boolean;
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  loading: state.userStudent.followLoading
})

interface LinkDispatchProps {
  follow: (id: string) => void;
  unFollow: (id: string) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
  follow: bindActionCreators(followUser, dispatch),
  unFollow: bindActionCreators(unFollowUser, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
