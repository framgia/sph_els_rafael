import { LayoutActionTypes } from "./action-types";


interface ToggleMenuAction {
  type: LayoutActionTypes.TOGGLE_MENU,
  payload: boolean,
}

export type LayoutAction =
  | ToggleMenuAction;
