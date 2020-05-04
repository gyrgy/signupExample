import { connect } from 'react-redux';
import { RootStoreType } from 'src/constants/types';
import { uiUserFormSubmittedAction } from 'src/store/actions/userFormActions';
import { uiPrivacyFormSubmittedAction } from 'src/store/actions/privacyFormActions';
import SignUp from 'src/pages/signUp/signUpPage';

const mapStateToProps = (store: RootStoreType) => {
  const { userForm, privacyForm } = store;
  return {
    userFormStoreData: userForm,
    privacyFormStoreData: privacyForm,
  };
};

const mapDispatchToProps = {
  submitUserForm: uiUserFormSubmittedAction,
  submitPrivacyForm: uiPrivacyFormSubmittedAction,
};

const SignUpPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

export default SignUpPageContainer;
