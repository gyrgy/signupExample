import { UserFormFieldNames } from 'src/constants/enums';

/**
 * This helper is for set user form input field values in state on change event.
 */

interface userFormFieldsStateHandlerProps {
  fieldName: string;
  fieldValue: string;
  userNameFieldCallback: (value: string) => void;
  userRoleFieldCallback: (value: string) => void;
  userEmailFieldCallback: (value: string) => void;
  userPasswordFieldCallback: (value: string) => void;
}

export const userFormFieldsStateHandler = (
  props: userFormFieldsStateHandlerProps
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
      return userNameFieldCallback(fieldValue);
    }
    case UserFormFieldNames.Role: {
      return userRoleFieldCallback(fieldValue);
    }
    case UserFormFieldNames.Email: {
      return userEmailFieldCallback(fieldValue);
    }
    case UserFormFieldNames.Password: {
      return userPasswordFieldCallback(fieldValue);
    }
    default:
      return fieldName;
  }
};
