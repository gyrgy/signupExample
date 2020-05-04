import { takeLatest, select } from 'redux-saga/effects';
import { STORE_PRIVACY_FORM_DATA } from 'src/store/actions/actionTypes';
import { RootStoreType } from 'src/constants/types';

const getStoredUserSignUpData = (store: RootStoreType) => store.userForm;
const getStoredSignUpPrivacyData = (store: RootStoreType) => store.privacyForm;

function* signUpUser() {
  const userData = yield select(getStoredUserSignUpData);
  const privacyData = yield select(getStoredSignUpPrivacyData);

  const { submitted: userDataSubmitted, ...userDataToSend } = userData;
  const { submitted: privacyDataSubmitted, ...privacyDataToSend } = privacyData;

  if(!userDataSubmitted || !privacyDataSubmitted) {
    return;
  }

  const data = {
    userData: {
      ...userDataToSend
    },
    privacyData: {
      ...privacyDataToSend
    }
  };

  console.log(data);
}

export function* userSignUpSaga() {
  yield takeLatest(STORE_PRIVACY_FORM_DATA, signUpUser);
}