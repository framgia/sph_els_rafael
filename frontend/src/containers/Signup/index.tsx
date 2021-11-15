import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Reading from '@assets/Images/read.svg';
import { RootState } from '@store/reducers'
import { register } from '@store/actions/action-creator'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux';
import SpinnerButton from '@components/SVG/SpinnerBtn';
import IRegisterErrorType from '../../types/registerErrorType'

type Props = LinkStateProps;
const Signup: FC<Props> = ({ errorMessage, registerLoading }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    mname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;

    setInput({
      ...input,
      [name]: value
    })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('email', input.email);
    formData.set('password', input.password);
    formData.set('password_confirmation', input.passwordConfirm);
    formData.set('fname', input.fname);
    formData.set('mname', input.mname);
    formData.set('lname', input.lname);

    dispatch(register(formData));
  };

  return (

    <>
      <form onSubmit={onSubmit} className="container ml-5 py-10 pr-5 bg-none flex flex-col justify-self-start  w-150 p z-50 rounded-xl md:bg-gray-700 md:justify-center">
        <h2
          className="my-6 font-display font-sans font-bold text-3xl text-white text-center"
        >
          Register to LMS
        </h2>

        <div className="w-96 mb-2 mx-auto md:w-120 ">
          <label htmlFor="fname" className="block font-sans text-lg text-white font-bold">
            First name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={(input && input.fname) || ""}
            onChange={handleChange}
            className="mt-2 mr-5 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
          />
          {errorMessage && errorMessage.fname &&
            errorMessage.fname.map((err) => (
              <span className="text-xs font-sans font-bold text-red-600">{err}</span>
            ))
          }
        </div>
        <div className="w-96 mb-2 mx-auto md:w-120">
          <label htmlFor="mname" className="block font-sans text-lg text-white font-bold">
            Middle name
          </label>
          <input
            type="text"
            name="mname"
            id="mname"
            value={(input && input.mname) || ""}
            onChange={handleChange}
            className="mt-2 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
          />
          {errorMessage && errorMessage.mname &&
            errorMessage.mname.map((err) => (
              <span className="text-xs font-sans font-bold text-red-600">{err}</span>
            ))
          }
        </div>
        <div className="w-96 mb-2 mx-auto md:w-120">
          <label htmlFor="lname" className="block font-sans text-lg text-white font-bold">
            Lname name
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={(input && input.lname) || ""}
            onChange={handleChange}
            className="mt-2 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
          />
          {errorMessage && errorMessage.lname &&
            errorMessage.lname.map((err) => (
              <span className="text-xs font-sans font-bold text-red-600">{err}</span>
            ))
          }
        </div>
        <div className="w-96 mb-2 mx-auto md:w-120">
          <label htmlFor="email" className="block font-sans text-lg text-white font-bold">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={(input && input.email) || ""}
            onChange={handleChange}
            className="mt-2 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
          />
          {errorMessage && errorMessage.email &&
            errorMessage.email.map((err) => (
              <span className="text-xs font-sans font-bold text-red-600">{err}</span>
            ))
          }
        </div>
        <div className="w-96 mb-2 mx-auto md:w-120">
          <label htmlFor="password" className="block font-sans text-lg text-white font-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={(input && input.password) || ""}
            onChange={handleChange}
            className="mt-2 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
          />
          {errorMessage && errorMessage.password &&
            errorMessage.password.map((err) => (
              <span className="text-xs font-sans font-bold text-red-600">{err}</span>
            ))
          }
        </div>
        <div className="w-96 mx-auto mb-2 md:w-120">
          <label htmlFor="passwordConfirm" className="block font-sans text-lg text-white font-bold">
            Confirmed Password
          </label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            value={(input && input.passwordConfirm) || ""}
            onChange={handleChange}
            className="mt-2 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
          />
        </div>
        <button
          disabled={registerLoading}
          className="py-3 mx-auto md:w-120 cursor-pointer border-none px-20 bg-indigo-800 font-sans rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
        >{registerLoading && (<SpinnerButton />)}Register</button>

        <Link to="/login" className="py-3 mx-auto md:w-120 text-white mt-4 font-sans font-bold">
          Already have an account? <span className="text-blue-300 ml-2"> Login up</span>
        </Link>
      </form>
      <img className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto" src={Reading} alt="Reading" />
    </>
  )
}

interface LinkStateProps {
  errorMessage: IRegisterErrorType | null,
  registerLoading: boolean,
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  errorMessage: state.auth.errorMessage,
  registerLoading: state.auth.registerLoading
})

export default connect(mapStateToProps, null)(Signup)
