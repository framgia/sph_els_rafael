import { FC, useState } from 'react';
import { displayImage } from '../../../Utils';

interface Props {
  fname: string;
  lname: string;
  totalQuiz?: number;
  totalWords?: number;
  displayPic?: string;
}

const UserDetail: FC<Props> = ({ fname, lname, totalQuiz, totalWords, displayPic }) => {

  return (
    <div className="flex flex-col">
      <div className="flex">
        <img src={displayImage(displayPic, fname, lname)} className="w-48 rounded-xl h-48" alt="" />
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
