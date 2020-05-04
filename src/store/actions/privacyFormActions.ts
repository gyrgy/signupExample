import {
  UI_PRIVACY_FORM_SUBMITTED,
  STORE_PRIVACY_FORM_DATA
} from 'src/store/actions/actionTypes';
import { PrivacyFormDataType, PrivacyFormStateType } from 'src/constants/types';

export interface UIPrivacyFormSubmittedActionType {
  type: typeof UI_PRIVACY_FORM_SUBMITTED
  payload: PrivacyFormDataType,
}

export const uiPrivacyFormSubmittedAction =
  (payload: PrivacyFormDataType): UIPrivacyFormSubmittedActionType => ({
    type: UI_PRIVACY_FORM_SUBMITTED,
    payload,
  });

export interface StorePrivacyFormDataActionType {
  type: typeof STORE_PRIVACY_FORM_DATA,
  payload: PrivacyFormStateType,
}

export const storePrivacyFormDataAction =
  (payload: PrivacyFormStateType): StorePrivacyFormDataActionType => ({
    type: STORE_PRIVACY_FORM_DATA,
    payload
  });