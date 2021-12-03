import { UserSettingActionTypes } from "./action-types";


interface UserDetailSettingUpdateDataAction {
  type: UserSettingActionTypes.UPDATE_DETAILS_SETTINGS,
}

interface UserDetailSettingStartUpdateDataAction {
  type: UserSettingActionTypes.UPDATE_DETAILS_SETTINGS_START,
}

interface UserDetailSettingUpdateDataSuccessAction {
  type: UserSettingActionTypes.UPDATE_DETAILS_SETTINGS_SUCCESS,
  payload: object,
}

interface UserDetailSettingUpdateDataFailAction {
  type: UserSettingActionTypes.UPDATE_DETAILS_SETTINGS_ERROR,
  payload: string
}

interface UserPasswordSettingUpdateDataAction {
  type: UserSettingActionTypes.UPDATE_PASSWORD_SETTINGS,
  id: string,
}

interface UserPasswordSettingUpdateDataSuccessAction {
  type: UserSettingActionTypes.UPDATE_PASSWORD_SETTINGS_SUCCESS,
  payload: object,
}

interface UserPasswordSettingUpdateDataFailAction {
  type: UserSettingActionTypes.UPDATE_PASSWORD_SETTINGS_ERROR,
  payload: string
}

interface UploadDisplayPictureAction {
  type: UserSettingActionTypes.UPLOAD_DISPLAY_PICTURE,
}

interface UploadDisplayPictureSuccessAction {
  type: UserSettingActionTypes.UPLOAD_DISPLAY_PICTURE_SUCCESS,
  payload: object,
}

interface UploadDisplayPictureFailAction {
  type: UserSettingActionTypes.UPLOAD_DISPLAY_PICTURE_ERROR,
  payload: string
}

export type UserSettingAction =
  | UserDetailSettingUpdateDataAction
  | UserDetailSettingUpdateDataSuccessAction
  | UserDetailSettingUpdateDataFailAction
  | UserPasswordSettingUpdateDataAction
  | UserPasswordSettingUpdateDataSuccessAction
  | UserPasswordSettingUpdateDataFailAction
  | UserDetailSettingStartUpdateDataAction
  | UploadDisplayPictureAction
  | UploadDisplayPictureSuccessAction
  | UploadDisplayPictureFailAction;
