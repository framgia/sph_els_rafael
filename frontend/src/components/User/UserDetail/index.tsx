import { FC, useState } from 'react';
import User from '@model/userModels'

interface Learnings {
  totalQuiz?: number,
  totalWords?: number,
}

type Props = Learnings & User;

const UserDetail: FC = () => {
  const [userDetails, setuserDetails] = useState<Props>({
    fname: "Rafael",
    lname: "Parayno",
    mname: "G",
    email: "rafael@gmail.com",
    totalQuiz: 5,
    totalWords: 20,
  })

  return (
    <div className="flex flex-col">
      <div className="flex">
        <img src="https://avatars.dicebear.com/api/bottts/:asdasd.svg?b=bbbbbb" className="w-48 rounded-xl" alt="" />
        <div className="flex flex-col ml-5">
          <span className="block font-sans mb-5 text-xl">{`${userDetails.fname} ${userDetails.lname}`}</span>
          <span className="block font-sans">Learned {userDetails.totalWords} words</span>
          <span className="block font-sans">Learned {userDetails.totalQuiz} Quiz</span>
        </div>
      </div>
    </div>
  )
}

export default UserDetail;
