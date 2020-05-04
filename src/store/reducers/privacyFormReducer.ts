import { STORE_PRIVACY_FORM_DATA } from 'src/store/actions/actionTypes';
import { StorePrivacyFormDataActionType } from 'src/store/actions/privacyFormActions';
import { PrivacyFormStateType } from 'src/constants/types';

const privacyFormInitState = {
  trayProductUpdates: false,
  otherProductsUpdates: false,
  submitted: false,
};

export const privacyFormReducer = (
  privacyFormState: PrivacyFormStateType = privacyFormInitState,
  action: StorePrivacyFormDataActionType ) => {
  switch(action.type){
    case STORE_PRIVACY_FORM_DATA: {
      const { payload }  = action;
      return { ...privacyFormState, ...payload };
    }
    default: return privacyFormState;
  }
};