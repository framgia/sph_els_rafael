import { LayoutActionTypes } from '../actions/action-types/';
import { Action } from '../actions'

interface LayoutState {
  showHiddenMenu: boolean;
}

export const initialState = {
  showHiddenMenu: false
};

const reducer = (
  state: LayoutState = initialState,
  action: Action): LayoutState => {
  switch (action.type) {
    case LayoutActionTypes.TOGGLE_MENU:
      return {
        ...state,
        showHiddenMenu: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;
