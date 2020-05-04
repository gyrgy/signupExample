import {
  validateEmail,
  validateNotRequiredTextField,
  validatePassword,
  validateRequiredTextField,
} from 'src/utils/validators';
import { UserFormDataType } from '../constants/types';

interface UserFormSubmitHandlerProps {
  userNameFieldValue: string;
  userRoleFieldValue: string;
  userEmailFieldValue: string;
  userPasswordFieldValue: string;
  setUserNameFieldError: (value: boolean) => void;
  setUserRoleFieldError: (value: boolean) => void;
  setUserEmailFieldError: (value: boolean) => void;
  setUserPasswordFieldError: (value: boolean) => void;
  submitUserForm: (payload: UserFormDataType) => void;
}

export const userFormSubmitHandler = (props: UserFormSubmitHandlerProps) => {
  const {
    userNameFieldValue,
    userRoleFieldValue,
    userEmailFieldValue,
    userPasswordFieldValue,
    setUserNameFieldError,
    setUserRoleFieldError,
    setUserEmailFieldError,
    setUserPasswordFieldError,
    submitUserForm,
  } = props;

  const nameError = !validateRequiredTextField(userNameFieldValue);
  const roleError = !validateNotRequiredTextField(userRoleFieldValue);
  const emailError = !validateEmail(userEmailFieldValue);
  const passwordError = !validatePassword(userPasswordFieldValue);

  if (nameError || roleError || emailError || passwordError) {
    if (nameError) {
      setUserNameFieldError(true);
    }

    if (roleError) {
      setUserRoleFieldError(true);
    }

    if (emailError) {
      setUserEmailFieldError(true);
    }

    if (passwordError) {
      setUserPasswordFieldError(true);
    }

    return;
  }

  submitUserForm({
    name: userNameFieldValue,
    role: userRoleFieldValue,
    email: userEmailFieldValue,
    password: userPasswordFieldValue,
  });
};
