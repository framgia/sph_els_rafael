import { FC } from 'react';
import Activity from './Activity';
import classes from './Activities.module.css'
import UserActivity from '@model/userActivityModel';
import Spinner from '@components/UI/Spinner/Spinner'

interface ActivityProps {
  activities: UserActivity[];
  loading: boolean;
}

const Activities: FC<ActivityProps> = ({ activities, loading }) => {

  return (
    <div className="col-span-2" >
      <div className={classes.activitiesBox}>
        <div className="border-bottom p-5">
          <h2 className="font-sans">Activities</h2>
          <hr className="mb-5" />
          <div className="flex flex-col">
            {loading ? (<Spinner />) : activities.length > 0
              && activities.map((activity, key: number) => (
                <Activity
                  activity={activity.activitable}
                  user={activity.user}
                  key={key} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities;
