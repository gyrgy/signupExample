import { combineReducers } from 'redux';
import { userFormReducer } from 'src/store/reducers/userFormReducer';
import { privacyFormReducer } from 'src/store/reducers/privacyFormReducer';

export const rootReducer = combineReducers({
  userForm: userFormReducer,
  privacyForm: privacyFormReducer,
});
