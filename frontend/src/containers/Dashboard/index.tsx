import { FC } from 'react';
import Activities from '@components/Activities';
import UserDetail from '@components/UserDetail';

const Dashboard: FC = () => {
  return (
    <div className="text-white grid gap-2 m-10 lg:grid-cols-3">
      <UserDetail />
      <Activities />
    </div>
  )
}

export default Dashboard;
