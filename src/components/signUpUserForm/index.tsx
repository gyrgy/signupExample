import React, { ChangeEvent, FocusEvent } from 'react';
import { Form, InputField, ButtonPrimary } from 'src/components/common';
import { UserFormFieldNames } from 'src/constants/enums';
import { t } from 'src/utils/i18n';
import {
  userFormTestID,
  userFormNameFieldTestID,
  userFormRoleFieldTestID,
  userFormEmailFieldTestID,
  userFormPasswordFieldTestID
} from 'src/constants/testIDs';

interface SignUpUserFromProps {
  userNameFieldValue: string;
  userNameFieldError: boolean;
  userRoleFieldValue: string;
  userRoleFieldError: boolean;
  userEmailFieldValue: string;
  userEmailFieldError: boolean;
  userPasswordFieldValue: string;
  userPasswordFieldError: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur:
  (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
  testID?: string;
}

const SignUpUserFrom = (props: SignUpUserFromProps) => {
  const {
    userNameFieldValue,
    userNameFieldError,
    userRoleFieldValue,
    userRoleFieldError,
    userEmailFieldValue,
    userEmailFieldError,
    userPasswordFieldValue,
    userPasswordFieldError,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <Form testID={userFormTestID}>
      <InputField
        type="text"
        label={t('userForm.userNameFieldLabel')}
        name={UserFormFieldNames.Name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={userNameFieldValue}
        required
        error={userNameFieldError}
        errorHelperText={userNameFieldError ? t('userForm.userNameFieldErrorHelperText') : ''}
        testID={userFormNameFieldTestID}
      />
      <InputField
        type="text"
        label={t('userForm.userRoleFieldLabel')}
        name={UserFormFieldNames.Role}
        onChange={handleChange}
        onBlur={handleBlur}
        value={userRoleFieldValue}
        error={userRoleFieldError}
        errorHelperText={userRoleFieldError ? t('userForm.userRoleFieldErrorHelperText') : ''}
        testID={userFormRoleFieldTestID}
      />
      <InputField
        type="text"
        label={t('userForm.userEmailFieldLabel')}
        name={UserFormFieldNames.Email}
        onChange={handleChange}
        onBlur={handleBlur}
        value={userEmailFieldValue}
        required
        error={userEmailFieldError}
        errorHelperText={userEmailFieldError ? t('userForm.userEmailFieldErrorHelperText') : ''}
        testID={userFormEmailFieldTestID}
      />
      <InputField
        type="password"
        label={t('userForm.userPasswordFieldLabel')}
        name={UserFormFieldNames.Password}
        onChange={handleChange}
        onBlur={handleBlur}
        value={userPasswordFieldValue}
        required
        error={userPasswordFieldError}
        errorHelperText={userPasswordFieldError ? t('userForm.userPasswordFieldErrorHelperText') : ''}
        testID={userFormPasswordFieldTestID}
      />
      <ButtonPrimary label="submit" onClick={handleSubmit} />
    </Form>
  );
};

export default SignUpUserFrom;
