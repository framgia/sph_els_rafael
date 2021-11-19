import { FC } from 'react';
import User from '@model/userModels';
interface ActivityProps {
  user: User;
  activity: string;
}

const Activity: FC<ActivityProps> = ({ user, activity }) => {
  const { fname, lname } = user;
  return (
    <div className="flex items-center m-5">
      <img className="mr-5" src="https://avatars.dicebear.com/api/bottts/:seed.svg?b=ffffff" width="75" alt="" />
      <div className="font-sans">
        <span><a className="italic underline mr-2 hover:cursor-pointer capitalize">{`${fname} ${lname}`}</a>{activity}</span>
        <span className="block text-sm">2 days ago</span>
      </div>
    </div>
  )
}

export default Activity;
