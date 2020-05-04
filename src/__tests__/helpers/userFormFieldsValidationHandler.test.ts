import { userFormFieldsValidationHandler } from 'src/helpers';
import { UserFormFieldNames } from 'src/constants/enums';

describe('test userFormFieldsValidationHandler', () => {
  let nameErrorState = false;
  let roleErrorState = false;
  let emailErrorState = false;
  let passwordErrorState = false;

  const userNameFieldCallback = (value: boolean) => {
    nameErrorState = value;
  };
  const userRoleFieldCallback = (value: boolean) => {
    roleErrorState = value;
  };
  const userEmailFieldCallback = (value: boolean) => {
    emailErrorState = value;
  };
  const userPasswordFieldCallback = (value: boolean) => {
    passwordErrorState = value;
  };

  it('tests name field error state update', () => {
    const nameFieldValue = '';
    userFormFieldsValidationHandler({
      fieldName: UserFormFieldNames.Name,
      fieldValue: nameFieldValue,
      userNameFieldCallback,
      userRoleFieldCallback,
      userEmailFieldCallback,
      userPasswordFieldCallback,
    });

    expect(nameErrorState).toEqual(true);
  });

  it('tests role field error state update', () => {
    const roleFieldValue = '<';
    userFormFieldsValidationHandler({
      fieldName: UserFormFieldNames.Role,
      fieldValue: roleFieldValue,
      userNameFieldCallback,
      userRoleFieldCallback,
      userEmailFieldCallback,
      userPasswordFieldCallback,
    });

    expect(roleErrorState).toEqual(true);
  });

  it('tests email field error state update', () => {
    const emailFieldValue = '';
    userFormFieldsValidationHandler({
      fieldName: UserFormFieldNames.Email,
      fieldValue: emailFieldValue,
      userNameFieldCallback,
      userRoleFieldCallback,
      userEmailFieldCallback,
      userPasswordFieldCallback,
    });

    expect(emailErrorState).toEqual(true);
  });

  it('tests password field error state update', () => {
    const passwordFieldValue = '';
    userFormFieldsValidationHandler({
      fieldName: UserFormFieldNames.Password,
      fieldValue: passwordFieldValue,
      userNameFieldCallback,
      userRoleFieldCallback,
      userEmailFieldCallback,
      userPasswordFieldCallback,
    });

    expect(passwordErrorState).toEqual(true);
  });

  it('tests if wrong filed name is given', () => {
    const wrongFieldValue = 'wrong field value';
    const wrongFieldName = 'wrong';
    const returnValue = userFormFieldsValidationHandler({
      fieldName: wrongFieldName,
      fieldValue: wrongFieldValue,
      userNameFieldCallback,
      userRoleFieldCallback,
      userEmailFieldCallback,
      userPasswordFieldCallback,
    });

    expect(returnValue).toEqual(false);
  });
});