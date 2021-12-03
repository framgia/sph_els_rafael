import { UserSettingActionTypes } from '../action-types/';
import User from '@model/userModels';
import { Dispatch } from 'redux';
import { Action } from '../';

export const updateUserDetailSetting = (Data: User) => ({
  type: UserSettingActionTypes.UPDATE_DETAILS_SETTINGS,
  payload: {
    meta: {
      api: {
        method: "post",
        url: `/api/details`,
        data: Data,
      },
    },
  },
});

export const updateUserPasswordSetting = (Data: FormData) => ({
  type: UserSettingActionTypes.UPDATE_PASSWORD_SETTINGS,
  payload: {
    meta: {
      api: {
        method: "post",
        url: `/api/password`,
        data: Data,
      },
    },
  },
});

export const startDetailsSettings = () => ({
  type: UserSettingActionTypes.UPDATE_DETAILS_SETTINGS_START,
});
