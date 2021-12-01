import { FC } from 'react';
import User from '@model/userModels';
import { Link } from 'react-router-dom';

interface Props {
  user: User;
}

const UserFollowActivity: FC<Props> = ({ user }) => {
  const { fname, lname, id } = user;
  return (
    <span>
      Followed<Link
        className="ml-2 underline mr-2 hover:cursor-pointer capitalize"
        to={`/profile/${id}`}>{`${fname} ${lname}`}</Link>
    </span>
  )
}

export default UserFollowActivity;
