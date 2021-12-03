import LearnWord from './userLearnWord'
import Follower from './followerModel';
import Following from './followingModel';

type User = {
  id?: string;
  email: string;
  fname: string;
  mname: string;
  lname: string;
  role?: number;
  photo?: string;
  user_learn_words?: LearnWord[];
  followers?: Follower[];
  followings?: Following[];
}

export default User;
