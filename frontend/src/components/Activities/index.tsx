import { FC, useState } from 'react';
import User from '@model/userModels';
import Activity from './Activity';
import classes from './Activities.module.css'

interface ActivityProps {
  user: User;
  activity: string;
}

const Activities: FC = () => {
  const [activities, setActivities] = useState<ActivityProps[]>([
    {
      user: {
        fname: "rafael",
        mname: "G",
        lname: "Parayno",
        email: "RafaelParayno"
      },
      activity: "Learn 20 of 20 words in Basic 500"
    },
    {
      user: {
        fname: "rafael",
        mname: "G",
        lname: "Parayno",
        email: "RafaelParayno"
      },
      activity: "Learn 20 of 20 words in Basic 500"
    },
    {
      user: {
        fname: "rafael",
        mname: "G",
        lname: "Parayno",
        email: "RafaelParayno"
      },
      activity: "Learn 20 of 20 words in Basic 500"
    }, {
      user: {
        fname: "rafael",
        mname: "G",
        lname: "Parayno",
        email: "RafaelParayno"
      },
      activity: "Learn 20 of 20 words in Basic 500"
    },
    {
      user: {
        fname: "rafael",
        mname: "G",
        lname: "Parayno",
        email: "RafaelParayno"
      },
      activity: "Learn 20 of 20 words in Basic 500"
    },
    {
      user: {
        fname: "rafael",
        mname: "G",
        lname: "Parayno",
        email: "RafaelParayno"
      },
      activity: "Learn 20 of 20 words in Basic 500"
    }
  ])

  return (
    <div className="col-span-2" >
      <div className={classes.activitiesBox}>
        <div className="border-bottom p-5">
          <h2 className="font-sans">Activities</h2>
          <hr className="mb-5" />
          <div className="flex flex-col">
            {activities.map((activity, key: number) => (
              <Activity activity={activity.activity} user={activity.user} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities;
