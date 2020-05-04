import { userFormFieldsStateHandler } from 'src/helpers';
import { UserFormFieldNames } from 'src/constants/enums';

describe('test userFormFieldsStateHandler', () => {
  let nameState = '';
  let roleState = '';
  let emailState = '';
  let passwordState = '';
  const userNameFieldCallback = (value: string) => {nameState = value;};
  const userRoleFieldCallback = (value: string) => {roleState = value;};
  const userEmailFieldCallback = (value: string) => {emailState = value;};
  const userPasswordFieldCallback = (value: string) => {passwordState = value;};

  it('tests name field state update', () => {
    const nameFieldValue = 'name field value';
    userFormFieldsStateHandler({
      fieldName: UserFormFieldNames.Name,
      fieldValue: nameFieldValue,
      userNameFieldCallback,
      userRoleFieldCallback,
      userEmailFieldCallback,
      userPasswordFieldCallback,
    });

    expect(nameState).toEqual(nameFieldValue);
  });

  it('tests role field state update', () => {
    const roleFieldValue = 'role field value';
    userFormFieldsStateHandler({
      fieldName: UserFormFieldNames.Role,
      fieldValue: roleFieldValue,
      userNameFieldCallback,
      userRoleFieldCallback,
      userEmailFieldCallback,
      userPasswordFieldCallback,
    });

    expect(roleState).toEqual(roleFieldValue);
  });

  it('tests email field state update', () => {
    const emailFieldValue = 'role field value';
    userFormFieldsStateHandler({
      fieldName: UserFormFieldNames.Email,
      fieldValue: emailFieldValue,
      userNameFieldCallback,
      userRoleFieldCallback,
      userEmailFieldCallback,
      userPasswordFieldCallback,
    });

    expect(emailState).toEqual(emailFieldValue);
  });

  it('tests password field state update', () => {
    const passwordFieldValue = 'role field value';
    userFormFieldsStateHandler({
      fieldName: UserFormFieldNames.Password,
      fieldValue: passwordFieldValue,
      userNameFieldCallback,
      userRoleFieldCallback,
      userEmailFieldCallback,
      userPasswordFieldCallback,
    });

    expect(passwordState).toEqual(passwordFieldValue);
  });

  it('tests if wrong filed name is given', () => {
    const wrongFieldValue = 'wrong field value';
    const wrongFieldName = 'wrong';
    const returnValue = userFormFieldsStateHandler({
      fieldName: wrongFieldName,
      fieldValue: wrongFieldValue,
      userNameFieldCallback,
      userRoleFieldCallback,
      userEmailFieldCallback,
      userPasswordFieldCallback,
    });

    expect(returnValue).toEqual(wrongFieldName);
  });
});