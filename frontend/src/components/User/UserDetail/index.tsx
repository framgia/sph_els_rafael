import { FC, useState } from 'react';
import User from '@model/userModels'

interface Props {
  fname: string;
  lname: string;
  totalQuiz?: number;
  totalWords?: number;
}


const UserDetail: FC<Props> = ({ fname, lname, totalQuiz, totalWords }) => {


  return (
    <div className="flex flex-col">
      <div className="flex">
        <img src={`https://avatars.dicebear.com/api/bottts/:${fname}${lname}.svg?b=bbbbbb`} className="w-48 rounded-xl" alt="" />
        <div className="flex flex-col ml-5">
          <span className="block font-sans mb-5 text-xl">{`${fname} ${lname}`}</span>
          <span className="block font-sans">Learned {totalWords} words</span>
          <span className="block font-sans">Learned {totalQuiz} Quiz</span>
        </div>
      </div>
    </div>
  )
}

export default UserDetail;
