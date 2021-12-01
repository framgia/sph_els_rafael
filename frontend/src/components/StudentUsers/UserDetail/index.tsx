import { FC } from 'react';
import User from '@model/userModels'
import classes from './UserDetail.module.css';
import { Link } from 'react-router-dom';

const UserDetail: FC<User> = ({ fname, lname, id }) => {

  return (
    <div className={classes.userCard}>
      <img src={`https://avatars.dicebear.com/api/bottts/:${fname}${lname}.svg?b=bbbbbb`}
        className={classes.userCardImg} alt="" />
      <h2 className={classes.userCardName}><Link to={`/profile/${id}`}>{`${fname} ${lname}`}</Link></h2>
      <button className={classes.userCardAction}>Follow</button>
    </div>
  )
}

export default UserDetail;
