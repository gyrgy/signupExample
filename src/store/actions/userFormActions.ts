import {
  UI_USER_FORM_SUBMITTED,
  STORE_USER_FORM_DATA
} from 'src/store/actions/actionTypes';
import { UserFormDataType, UserFormStateType } from 'src/constants/types';

export interface UIUserFormSubmittedActionType {
  type: typeof UI_USER_FORM_SUBMITTED
  payload: UserFormDataType,
}

export const uiUserFormSubmittedAction =
  (payload: UserFormDataType): UIUserFormSubmittedActionType => ({
    type: UI_USER_FORM_SUBMITTED,
    payload,
  });

export interface StoreUserFormDataActionType {
  type: typeof STORE_USER_FORM_DATA,
  payload: UserFormStateType,
}

export const storeUserFormDataAction =
  (payload: UserFormStateType): StoreUserFormDataActionType => ({
    type: STORE_USER_FORM_DATA,
    payload
  });

