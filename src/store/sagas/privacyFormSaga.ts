import { takeLatest, put } from 'redux-saga/effects';
import { UI_PRIVACY_FORM_SUBMITTED } from 'src/store/actions/actionTypes';
import { UIPrivacyFormSubmittedActionType, storePrivacyFormDataAction } from 'src/store/actions/privacyFormActions';

function* storePrivacyFormData(action: UIPrivacyFormSubmittedActionType) {
  const { payload } = action;
  const data = {
    ...payload,
    submitted: true,
  };
  yield put(storePrivacyFormDataAction(data));
}

export function* privacyFormSaga() {
  yield takeLatest(UI_PRIVACY_FORM_SUBMITTED, storePrivacyFormData);
}