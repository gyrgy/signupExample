import { takeLatest, put } from 'redux-saga/effects';
import { UI_USER_FORM_SUBMITTED } from 'src/store/actions/actionTypes';
import { UIUserFormSubmittedActionType, storeUserFormDataAction } from 'src/store/actions/userFormActions';

function* storeUserFormData(action: UIUserFormSubmittedActionType) {
  const { payload } = action;
  const data = {
    ...payload,
    submitted: true,
  };
  yield put(storeUserFormDataAction(data));
}

export function* userFormSaga() {
  yield takeLatest(UI_USER_FORM_SUBMITTED, storeUserFormData);
}