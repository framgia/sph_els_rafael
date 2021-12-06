import { FC, useState, useEffect } from 'react';
import { RootState } from '@store/reducers'
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '@store/actions/index'
import { uploadProfileImage, authCheckState } from '@store/actions/action-creator'
import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import User from '@model/userModels';
import SpinnerButton from '@components/SVG/SpinnerBtn';
import FileUploadIcon from '@components/SVG/FileUploadIcon'

type Props = LinkStateProps & LinkDispatchProps;

const UserPhotoSettings: FC<Props> = ({ uploadImage, saveLoading, error, user }) => {
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] =
    useState<string>(`https://avatars.dicebear.com/api/bottts/:${user?.fname}${user?.lname}.svg?b=bbbbbb`);
  const [selectedFile, setSelectedFile] = useState<File>();

  useEffect(() => {
    user &&
      user.photo && setProfileImage(`${process.env.REACT_APP_BACKEND_BASE_URL}image/${user.photo}`);
  }, [user])


  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("profile_image", selectedFile, selectedFile.name);
      uploadImage(formData);
      dispatch(authCheckState());
    }
  }

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const fileList = e.target.files;
    reader.onload = () => {
      if (reader.readyState == 2) {
        setProfileImage(reader.result as string);
      }
    }
    if (!fileList) return;
    reader.readAsDataURL(fileList[0]);
    setSelectedFile(fileList[0]);
  }

  return (
    <form onSubmit={onSubmit} className="container
     pt-10 overflow-auto bg-none flex flex-col justify-self-start rounded-xl md:justify-center">
      <img src={profileImage} className="w-48 rounded-xl mx-auto mb-5" alt="" />
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
          <div className="flex flex-col items-center justify-center pt-7">
            <FileUploadIcon />
            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
              Select a photo</p>
          </div>
          <input
            accept="image/*"
            type="file"
            name="profile_image"
            onChange={imageHandler}
            className="mx-auto" />
        </label>
      </div>

      <button
        className="py-2 mx-auto cursor-pointer border-none px-10 bg-indigo-800 font-sans rounded-full text-white font-bold uppercase text-sm mt-2"
        type="submit">
        {saveLoading && (
          <SpinnerButton />
        )}
        Upload
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
  uploadImage: (data: FormData) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, ownProps: any): LinkDispatchProps => ({
  uploadImage: bindActionCreators(uploadProfileImage, dispatch),
})

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  user: state.auth.user,
  saveLoading: state.userSetting.SaveLoading,
  error: state.userSetting.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPhotoSettings);

