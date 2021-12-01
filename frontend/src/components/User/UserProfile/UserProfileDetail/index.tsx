import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FollowerModel from '@model/followerModel';
import FollowingModel from '@model/followingModel';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  followUser,
  unFollowUser,
  getUserStudent
} from '@store/actions/action-creator/';
import { RootState } from '@store/reducers';
import SpinnerButton from '@components/SVG/SpinnerBtn';

interface UserData {
  fname: string;
  lname: string;
  followers?: FollowerModel[];
  following?: FollowingModel[];
  totalLearnWords?: number;
}

type Props = UserData & LinkDispatchProps & LinkStateProps;

const Profile: FC<Props> = ({
  fname, lname,
  followers, following,
  unFollow, follow,
  loading, getUser,
  totalLearnWords }) => {
  let { id } = useParams<any>();
  const studentId = localStorage.getItem('userid');

  const [isFollowedState, setIsFollowedState] = useState(false);

  useEffect(() => {
    if (!followers)
      return;

    const isFollowed = followers && followers.some((user: any) => {
      return user.id !== studentId;
    })

    setIsFollowedState(isFollowed);
  }, [followers])

  const followAction = () => {
    isFollowedState ?
      id && unFollow(id) : id && follow(id);
    getUser(id);
    setIsFollowedState(currentState => !currentState);
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full md:w-60 sm:w-40 mx-10">
      <img src={`https://avatars.dicebear.com/api/bottts/:${fname}${lname}.svg?b=bbbbbb`}
        className="w-60 rounded-xl" alt="" />
      <h2 className="mb-5 font-sans font-bold">{fname} {lname}</h2>
      <hr className="bg-white mb-5 w-full" />
      <div className="flex justify-between align-middle w-60 text-lg">
        <div className="text-center">
          <span className="block">{followers?.length}</span>
          <span className="block font-bold">Followers</span>
        </div>
        <div className="text-center">
          <span className="block">{following?.length}</span>
          <span className="block font-bold">Following</span>
        </div>
      </div>
      {
        id !== studentId && (
          <button
            disabled={loading}
            onClick={() => followAction()}
            className="capitalize 
          mt-10 font-bold 
          border-0 
          bg-purple-700 
          text-white 
          px-10 py-5 rounded-full 
          transform hover:translate-y-1 transition-all duration-500">
            {loading && <SpinnerButton />}
            {isFollowedState ? 'UNFOLLOW' : 'FOLLOW'}
          </button>
        )
      }
      <Link to={`/learnWords/${id}`}
        className="mt-10 text-lg underline hover:cursor-pointer hover:font-bold">
        Learned {totalLearnWords} words</Link>
    </div>
  );
}

interface LinkStateProps {
  loading: boolean;
}

const mapStateToProps = (state: RootState, ownProps: UserData): LinkStateProps => ({
  loading: state.userStudent.followLoading
})

interface LinkDispatchProps {
  follow: (id: string) => void;
  unFollow: (id: string) => void;
  getUser: (id: string) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: UserData):
  LinkDispatchProps => ({
    follow: bindActionCreators(followUser, dispatch),
    unFollow: bindActionCreators(unFollowUser, dispatch),
    getUser: bindActionCreators(getUserStudent, dispatch),
  })

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
