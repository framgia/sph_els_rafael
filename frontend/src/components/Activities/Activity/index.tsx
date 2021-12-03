import { FC } from 'react';
import User from '@model/userModels';
import UserFollowActivity from './UserFollowActivity';
import UserQuizActivity from './UserQuizActivity';
import { Link } from 'react-router-dom';
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns'
import { displayImage } from '../../../Utils';

interface ActivityProps {
  user: User;
  activity: any;
}

const Activity: FC<ActivityProps> = ({ user, activity }) => {
  const { fname, lname, photo } = user;
  const { user_follower, title, question_choices, questions, created_at } = activity;
  const studentId = localStorage.getItem('userid');
  const dateActivity = new Date(created_at);
  const now = new Date();
  const spanMins = differenceInMinutes(now, dateActivity);
  const spanHours = differenceInHours(now, dateActivity);
  const spanDays = differenceInDays(now, dateActivity);

  const renderTime = () => {
    if (spanHours > 24) {
      return `${spanDays} day ago`;
    } else if (spanHours === 0) {
      return `${spanMins} min ago`;
    } else {
      return `${spanHours} hour ago`;
    }
  }

  return (
    <div className="flex items-center m-5">
      <img className="mr-5"
        src={displayImage(photo, fname, lname)}
        width="75" alt="display photo" />
      <div className="font-sans">
        <span><Link to={`/profile/${user.id}`} className="italic underline mr-2 hover:cursor-pointer capitalize">
          {Number(studentId) === Number(user.id) ? 'you' : `${fname} ${lname}`}
        </Link>
          {
            user_follower ?
              (<UserFollowActivity user={user_follower} />)
              : (<UserQuizActivity
                title={title}
                question_choices={question_choices}
                questions={questions} />)
          }
        </span>
        <span className="block text-sm">
          {renderTime()}
        </span>
      </div>
    </div>
  )
}

export default Activity;
