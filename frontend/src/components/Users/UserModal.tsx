import React, { FC, useState, useEffect } from 'react';
import Modal from '@components/UI/Modal/Modal';
import {
  PlusCircleIcon, SaveIcon
} from "@heroicons/react/solid";
import { RootState } from '@store/reducers'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import { bindActionCreators } from 'redux';
import {
  editUserAdminModal,
  saveUserData,
  updateUserData
} from '@store/actions/action-creator/'
import { connect } from 'react-redux'
import Users from '../../models/userModels';
import SpinnerBtn from '@components/SVG/SpinnerBtn';
import classes from './UserModal.module.css';
import { ErrorMessage } from '@store/actions/userActions'


interface Error {
  email: string | undefined;
  fname: string | undefined;
  mname: string | undefined;
  lname: string | undefined;
}

type Props = LinkDispatchProps & LinkStateProps;

const UserModal: FC<Props> = ({
  editUserDetails,
  SaveLoading,
  error,
  editUserAdminModal,
  saveUserData,
  updateUserData }) => {
  const [input, setInput] = useState<Users>({
    id: "",
    fname: "",
    lname: "",
    mname: "",
    email: "",
  })

  const [errorState, setErrorState] = useState<Error>({
    email: "",
    fname: "",
    lname: "",
    mname: "",
  });

  useEffect(() => {
    const { fname, lname, mname, email, id } = (editUserDetails && editUserDetails) || {}

    editUserDetails && setInput({
      fname: fname,
      lname: lname,
      mname: mname,
      email: email,
      id: id
    })

  }, [editUserDetails])

  useEffect(() => {
    const { fname, lname, mname, email } = (error && error) || {}
    error && setErrorState({
      email: email && email,
      fname: fname && fname,
      lname: lname && lname,
      mname: mname && mname,
    })
  }, [error])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({
      ...input,
      [name]: value
    })
  }

  const saveClick = () => {
    if (!input.fname || !input.mname || !input.lname || !input.email) {
      return;
    }

    const formData = new FormData();

    formData.set('fname', input.fname);
    formData.set('lname', input.lname);
    formData.set('mname', input.mname);
    formData.set('email', input.email);

    input.id ?
      updateUserData(input, input.id && input.id)
      : saveUserData(formData);

  }

  return (
    <Modal
      isOpen={editUserDetails ? true : false}
      title={
        input.id && input.id ?
          <span>
            <PlusCircleIcon className="w-5 h-5" />&nbsp;Update User
          </span>
          :
          <span>
            <PlusCircleIcon className="w-5 h-5" />&nbsp;Add User
          </span>
      }
      onClose={() => editUserAdminModal(null)}
    >
      <div className="flex flex-col justify-center pb-10">
        <div className="grid grid-cols-6 gap-x-2 gap-y-3">
          <div className="col-span-6 md:col-span-2">
            <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              onChange={handleChange}
              value={(input && input.fname) || ""}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-11/12 shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 md:col-span-2">
            <label htmlFor="mname" className="block text-sm font-medium text-gray-700">
              Middle name
            </label>
            <input
              type="text"
              name="mname"
              id="mname"
              value={(input && input.mname) || ""}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-11/12 shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 md:col-span-2">
            <label htmlFor="lname" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              value={(input && input.lname) || ""}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-11/12 shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-6 sm:col-span-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={(input && input.email) || ""}
              onChange={handleChange}
              className={`${errorState.email == "" ? classes.inputs : classes.error}`}
            />
            {errorState.email &&
              <span className="text-xs font-bold text-red-600">{errorState}</span>
            }
          </div>

        </div>
        <div className="flex justify-center items-center mt-5">
          <button disabled={SaveLoading} onClick={() => saveClick()} className="bg-gray-600 text-lg hover:bg-gray-800 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" type="button">
            Save {SaveLoading ? (
              <SpinnerBtn />
            ) : (
              <SaveIcon className="text-2xl h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </Modal >
  )

}

interface LinkStateProps {
  editUserDetails: Users | any,
  SaveLoading: boolean,
  error: ErrorMessage | null,
}

interface LinkDispatchProps {
  editUserAdminModal: (data: object | null) => void;
  saveUserData: (data: FormData | null) => void;
  updateUserData: (data: any, id: string) => void;
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  editUserDetails: state.users.editUserDetails,
  SaveLoading: state.users.SaveLoading,
  error: state.users.error,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
  editUserAdminModal: bindActionCreators(editUserAdminModal, dispatch),
  saveUserData: bindActionCreators(saveUserData, dispatch),
  updateUserData: bindActionCreators(updateUserData, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserModal)

