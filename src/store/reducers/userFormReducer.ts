import { STORE_USER_FORM_DATA } from 'src/store/actions/actionTypes';
import { StoreUserFormDataActionType } from 'src/store/actions/userFormActions';
import { UserFormStateType } from 'src/constants/types';

const userFormInitState = {
  name: '',
  role: '',
  email: '',
  password: '',
  submitted: false,
};

export const userFormReducer = (
  userFormState: UserFormStateType = userFormInitState,
  action: StoreUserFormDataActionType ) => {
  switch(action.type){
    case STORE_USER_FORM_DATA: {
      const { payload }  = action;
      return { ...userFormState, ...payload };
    }
    default: return userFormState;
  }
};
