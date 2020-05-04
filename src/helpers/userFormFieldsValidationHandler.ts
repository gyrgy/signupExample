import { UserFormFieldNames } from 'src/constants/enums';
import {
  validateRequiredTextField,
  validateNotRequiredTextField,
  validateEmail,
  validatePassword,
} from 'src/utils/validators';

/**
 * This helper is for validating user form input fields on blur event.
 */

interface UserFormFieldsValidationHandlerProps {
  fieldName: string;
  fieldValue: string;
  userNameFieldCallback: (value: boolean) => void;
  userRoleFieldCallback: (value: boolean) => void;
  userEmailFieldCallback: (value: boolean) => void;
  userPasswordFieldCallback: (value: boolean) => void;
}

export const userFormFieldsValidationHandler = (
  props: UserFormFieldsValidationHandlerProps
) => {
  const {
    fieldName,
    fieldValue,
    userNameFieldCallback,
    userRoleFieldCallback,
    userEmailFieldCallback,
    userPasswordFieldCallback,
  } = props;

  switch (fieldName) {
    case UserFormFieldNames.Name: {
      return userNameFieldCallback(!validateRequiredTextField(fieldValue));
    }
    case UserFormFieldNames.Role: {
      return userRoleFieldCallback(!validateNotRequiredTextField(fieldValue));
    }
    case UserFormFieldNames.Email: {
      return userEmailFieldCallback(!validateEmail(fieldValue));
    }
    case UserFormFieldNames.Password: {
      return userPasswordFieldCallback(!validatePassword(fieldValue));
    }
    default:
      return false;
  }
};
