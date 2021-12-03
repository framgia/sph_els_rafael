import { FC, useState, useEffect } from 'react';
import { RootState } from '@store/reducers'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import {
  updateUserDetailSetting,
  authCheckState
} from '@store/actions/action-creator'
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import User from '@model/userModels';
import SpinnerButton from '@components/SVG/SpinnerBtn';
import Swal from 'sweetalert2';

type Props = LinkStateProps & LinkDispatchProps;

const UserDetailSettings: FC<Props> = ({
  user, updateDetails,
  saveLoading, error }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    mname: "",
    email: "",
  })

  useEffect(() => {
    user && setInput(user);
  }, [])

  const [errorState, setErrorState] = useState<any>([]);
  const [isSuccessState, setIsSuccessState] = useState<boolean | null>
    (null);

  useEffect(() => {
    if (error != null) {
      let errorObj: any = eval(error);
      setErrorState(errorObj.data.errors);
    } else {
      setErrorState("");
    }
  }, [error]);

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

    const { fname, lname, mname, email } = input;

    updateDetails({ fname, lname, mname, email });
    dispatch(authCheckState());
  }

  return (
    <form onSubmit={onSubmit} className="container pt-10 bg-none flex flex-col justify-self-start rounded-xl md:justify-center">
      {errorState &&
        Object.keys(errorState).map((keys: any) => {
          return (
            <span className="block text-xs mx-auto mb-2 font-sans font-bold text-red-600">
              {errorState[keys]}
            </span>
          )
        })
      }
      <div className="w-80 mb-2 mx-auto ">
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
      </div>
      <div className="w-80 mb-2 mx-auto">
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

      </div>
      <div className="w-80 mb-2 mx-auto">
        <label htmlFor="lname" className="block font-sans text-lg text-white font-bold">
          Last name
        </label>
        <input
          type="text"
          name="lname"
          id="lname"
          value={(input && input.lname) || ""}
          onChange={handleChange}
          className="mt-2 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
        />

      </div>
      <div className="w-80 mb-2 mx-auto">
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
      </div>
      <button
        type="submit"
        disabled={saveLoading}

        className="py-2 mx-auto cursor-pointer border-none px-10 bg-indigo-800 font-sans rounded-full text-white font-bold uppercase text-sm mt-2"
      >
        {saveLoading && (<SpinnerButton />)}
        Update
      </button>
    </form>
  )
}


interface LinkStateProps {
  user: User | null,
  saveLoading: boolean,
  error: string | null,
}

interface LinkDispatchProps {
  updateDetails: (data: User) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
  updateDetails: bindActionCreators(updateUserDetailSetting, dispatch),
})

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  user: state.auth.user,
  saveLoading: state.userSetting.SaveLoading,
  error: state.userSetting.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailSettings);
