import { LayoutActionTypes } from '../action-types/';
import { Dispatch } from 'redux';
import { Action } from '../';

export const toggleMeu = (toggle: boolean) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: LayoutActionTypes.TOGGLE_MENU,
    payload: toggle
  })
};
