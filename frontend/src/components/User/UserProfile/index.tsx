import { FC } from 'react';
import UserProfileDetail from './UserProfileDetail';
import Activities from '@components/Activities';

const Profile: FC = () => {
  return (
    <div className="text-white grid gap-2 m-10 lg:grid-cols-3">
      <UserProfileDetail />
      <Activities />
    </div>
  );
}

export default Profile;
