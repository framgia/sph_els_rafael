import { FC } from 'react';
import UserProfileDetail from '../UserProfile/UserProfileDetail';
import LearnWords from './LearnWords';

const UserLearnWords: FC = () => {
  return (
    <div className="text-white grid gap-2 m-10 lg:grid-cols-3">
      <UserProfileDetail />
      <LearnWords />
    </div>
  )
}

export default UserLearnWords;
