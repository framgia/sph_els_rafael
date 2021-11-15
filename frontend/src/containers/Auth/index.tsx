import { FC, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Learning from '@assets/Images/learning.svg';
import Avatar from '@assets/Images/avatar.svg';
import { RootState } from '@store/reducers'
import { authLogin } from '@store/actions/action-creator'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux';
import SpinnerButton from '@components/SVG/SpinnerBtn';

type Props = LinkStateProps;

const Auth: FC<Props> = ({ SaveLoading, error }) => {
  const dispatch = useDispatch();
  const [errorState, setErrorState] = useState("");
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('email', credentials.email);
    formData.set('password', credentials.password);

    dispatch(authLogin(formData));
  };


  useEffect(() => {
    error && setErrorState(error);
  }, [error])
  return (
    <>
      <form
        noValidate
        onSubmit={onSubmit}
        className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2"
      >
        <img className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto" src={Learning} />
        <div className=" flex py-10 flex-col justify-center items-center w-3/5  rounded-lg">
          <img className="w-32" src={Avatar} />
          <h2
            className="my-6 font-display font-sans font-bold text-3xl text-white text-center"
          >
            Welcome to LMS
          </h2>
          {errorState && (
            <span className="text-sm bt-5 block font-bold text-red-600">Incorrect Password or username</span>
          )}
          <div className="w-80 border-0 border-b-2 border-solid border-indigo-500 mb-10">
            <div className="flex items-center">
              <i className='ml-2 text-white text-xs z-10 far fa-user '></i>
              <input name="email" value={credentials.email || ""} onChange={onChange} type='text' placeholder="username" className="font-sans -mx-6 appearance-none bg-transparent border-none  leading-tight px-8 text-lg w-full py-2 text-white focus:outline-none focus:ring-transparent" />
            </div>
          </div>
          <div className="w-80 mb-4 border-0 border-b-2 border-solid border-indigo-500">
            <div className="flex items-center">
              <i className='ml-2 fill-current text-white text-xs z-10 fas fa-lock'></i>
              <input
                type='password'
                value={credentials.password || ""}
                name="password"
                onChange={onChange}
                placeholder="password"
                className="form-input font-sans -mx-6 appearance-none bg-transparent border-none  leading-tight px-8 text-lg w-full py-2 text-white focus:outline-none focus:ring-transparent" />
            </div>
          </div>
          <a className="mr-32 self-end mt-4 font-sans text-white font-bold">Forgot password?</a>
          <button
            disabled={SaveLoading}
            className="py-3 cursor-pointer border-none px-20 bg-indigo-800 font-sans rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
          >{SaveLoading && (<SpinnerButton />)} Login</button>

          <Link to="/signup" className="py-3 text-white mt-4 font-sans font-bold">
            Not a member? <span className="text-indigo-500 ml-2"> Sign up</span>
          </Link>
        </div>
      </form>
    </>
  );
}

interface LinkStateProps {
  authToken: string | null,
  SaveLoading: boolean,
  error: string | null,
  errorStatus: string | null,
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  authToken: state.auth.token,
  SaveLoading: state.auth.loading,
  error: state.auth.error,
  errorStatus: state.auth.errorStatus,
})

export default connect(mapStateToProps, null)(Auth)
