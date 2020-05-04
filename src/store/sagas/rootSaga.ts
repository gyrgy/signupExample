import { all } from 'redux-saga/effects';
import { userFormSaga } from 'src/store/sagas/userFormSaga';
import { privacyFormSaga } from 'src/store/sagas/privacyFormSaga';
import { userSignUpSaga } from 'src/store/sagas/userSignUpSaga';

export function* rootSaga() {
  yield all([userFormSaga(), privacyFormSaga(), userSignUpSaga()]);
}