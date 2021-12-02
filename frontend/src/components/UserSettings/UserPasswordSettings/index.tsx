import { FC, useState, useEffect } from 'react';
import { RootState } from '@store/reducers'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import { updateUserPasswordSetting } from '@store/actions/action-creator'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '@model/userModels';
import SpinnerButton from '@components/SVG/SpinnerBtn';

type Props = LinkStateProps & LinkDispatchProps;

const UserPasswordSettings: FC<Props> = ({ updatePass, error, saveLoading }) => {
  const [input, setInput] = useState({
    current_password: "",
    password: "",
    passwordConfirm: "",
  });

  const [errorState, setErrorState] = useState<any>([]);

  useEffect(() => {
    if (error) {
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

    const formData = new FormData();
    formData.set('current_password', input.current_password);
    formData.set('password', input.password);
    formData.set('password_confirmation', input.passwordConfirm);

    updatePass(formData);
  }
  return (
    <form onSubmit={onSubmit} className="container
     pt-10 overflow-auto bg-none flex flex-col justify-self-start rounded-xl md:justify-center">
      {errorState &&
        Object.keys(errorState).map((keys: any) => {
          return (
            <span className="block text-xs mx-auto mb-2 font-sans font-bold text-red-600">
              {errorState[keys]}
            </span>
          )
        })
      }
      <div className="w-80 mb-2 mx-auto">
        <label htmlFor="current_password" className="block font-sans text-lg text-white font-bold">
          Old Password
        </label>
        <input
          type="password"
          name="current_password"
          id="current_password"
          value={(input && input.current_password) || ""}
          onChange={handleChange}
          className="mt-2 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
        />
      </div>
      <div className="w-80 mb-2 mx-auto">
        <label htmlFor="password" className="block font-sans text-lg text-white font-bold">
          New Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={(input && input.password) || ""}
          onChange={handleChange}
          className="mt-2 font-sans bg-white rounded-full  leading-tight text-lg py-2 text-black w-full"
        />
      </div>
      <div className="w-80 mx-auto mb-2">
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
        disabled={saveLoading}
        className="py-2 mx-auto cursor-pointer border-none px-10 
        bg-indigo-800 font-sans rounded-full 
        text-white font-bold uppercase text-sm mt-2"
      >
        {saveLoading && (
          <SpinnerButton />
        )}
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
  updatePass: (data: FormData) => void;

}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
  updatePass: bindActionCreators(updateUserPasswordSetting, dispatch),

})

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  user: state.auth.user,
  saveLoading: state.userSetting.SaveLoading,
  error: state.userSetting.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPasswordSettings);

