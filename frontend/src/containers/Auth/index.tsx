import { FC, useState } from 'react';
import { Link } from "react-router-dom";
import Learning from '@assets/Images/learning.svg';
import Avatar from '@assets/Images/avatar.svg';

const Auth: FC = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
  };

  let errorMessage: any = (
    <p style={{ color: 'red' }}>Incorrect Password Or Username</p>
  );
  return (
    <>
      <img className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto" src={Learning} />
      <form className=" flex py-10 flex-col justify-center items-center w-3/5  rounded-lg">
        <img className="w-32" src={Avatar} />
        <h2
          className="my-6 font-display font-sans font-bold text-3xl text-white text-center"
        >
          Welcome to LMS
        </h2>
        <div className="w-80 border-0 border-b-2 border-solid border-indigo-500 mb-10">
          <div className="flex items-center">
            <i className='ml-2 text-white text-xs z-10 far fa-user '></i>
            <input type='text' placeholder="username" className="font-sans capitalize -mx-6 appearance-none bg-transparent border-none  leading-tight px-8 text-lg w-full py-2 text-white focus:outline-none focus:ring-transparent" />
          </div>
        </div>
        <div className="w-80 mb-4 border-0 border-b-2 border-solid border-indigo-500">
          <div className="flex items-center">
            <i className='ml-2 fill-current text-white text-xs z-10 fas fa-lock'></i>
            <input type='text' placeholder="password" className="form-input capitalize font-sans -mx-6 appearance-none bg-transparent border-none  leading-tight px-8 text-lg w-full py-2 text-white focus:outline-none focus:ring-transparent" />
          </div>
        </div>
        <a className="mr-32 self-end mt-4 font-sans text-white font-bold">Forgot password?</a>
        <button
          className="py-3 cursor-pointer border-none px-20 bg-indigo-800 font-sans rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
        >Login</button>

        <Link to="/signup" className="py-3 text-white mt-4 font-sans font-bold">
          Not a member? <span className="text-indigo-500 ml-2"> Sign up</span>
        </Link>

      </form>
    </>
  );
}

export default Auth;

