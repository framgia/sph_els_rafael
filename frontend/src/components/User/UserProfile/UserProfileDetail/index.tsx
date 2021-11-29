import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

interface UserData {
  fname: string;
  lname: string;
}

const Profile: FC<UserData> = ({ fname, lname }) => {
  let { id } = useParams<any>();
  const studentId = localStorage.getItem('userid');
  return (
    <div className="flex flex-col items-center justify-center h-full w-full md:w-60 sm:w-40 mx-10">
      <img src={`https://avatars.dicebear.com/api/bottts/:${fname}${lname}.svg?b=bbbbbb`}
        className="w-60 rounded-xl" alt="" />
      <h2 className="mb-5 font-sans font-bold">{fname} {lname}</h2>
      <hr className="bg-white mb-5 w-full" />
      <div className="flex justify-between align-middle w-60 text-lg">
        <div className="text-center">
          <span className="block">50</span>
          <span className="block font-bold">Followers</span>
        </div>
        <div className="text-center">
          <span className="block">20</span>
          <span className="block font-bold">Following</span>
        </div>
      </div>
      {
        id !== studentId && (
          <button className="capitalize 
          mt-10 font-bold 
          border-0 
          bg-purple-700 
          text-white 
          px-10 py-5 rounded-full">
            UNFOLLOW</button>
        )
      }
      <Link to={`/learnWords/${id}`} className="mt-10 text-lg underline hover:cursor-pointer hover:font-bold">Learned 20 words</Link>
    </div>
  );
}

export default Profile;
