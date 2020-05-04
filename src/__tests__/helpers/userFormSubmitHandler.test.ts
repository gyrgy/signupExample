import { userFormSubmitHandler } from 'src/helpers';
import { UserFormDataType } from 'src/constants/types';

describe('test userFormSubmitHandler', () => {
  let userNameFieldErrorState = false;
  let userRoleFieldErrorState = false;
  let userEmailFieldErrorState = false;
  let userPasswordFieldErrorState = false;
  let userFormDataToSubmit = {};

  let userNameFieldValue = 'name';
  let userRoleFieldValue = 'role';
  let userEmailFieldValue = 'example@example.com';
  let userPasswordFieldValue = '1Abcdefgh';

  const setUserNameFieldError = (value: boolean) => {
    userNameFieldErrorState = value;
  };
  const setUserRoleFieldError = (value: boolean) => {
    userRoleFieldErrorState = value;
  };
  const setUserEmailFieldError = (value: boolean) => {
    userEmailFieldErrorState = value;
  };
  const setUserPasswordFieldError = (value: boolean) => {
    userPasswordFieldErrorState = value;
  };
  const submitUserForm = (payload: UserFormDataType) => {
    userFormDataToSubmit = payload;
  };

  it('tests data submit with valid field values', () => {
    const expectedData = {
      name: userNameFieldValue,
      role: userRoleFieldValue,
      email: userEmailFieldValue,
      password: userPasswordFieldValue,
    };

    userFormSubmitHandler({
      userNameFieldValue,
      userRoleFieldValue,
      userEmailFieldValue,
      userPasswordFieldValue,
      setUserNameFieldError,
      setUserRoleFieldError,
      setUserEmailFieldError,
      setUserPasswordFieldError,
      submitUserForm,
    });

    expect(userFormDataToSubmit).toEqual(expectedData);
    expect(userNameFieldErrorState).toEqual(false);
    expect(userRoleFieldErrorState).toEqual(false);
    expect(userEmailFieldErrorState).toEqual(false);
    expect(userPasswordFieldErrorState).toEqual(false);
  });

  it('tests error state', () => {
    userNameFieldValue = '';
    userRoleFieldValue = '<';
    userEmailFieldValue = '';
    userPasswordFieldValue = '';

    userFormSubmitHandler({
      userNameFieldValue,
      userRoleFieldValue,
      userEmailFieldValue,
      userPasswordFieldValue,
      setUserNameFieldError,
      setUserRoleFieldError,
      setUserEmailFieldError,
      setUserPasswordFieldError,
      submitUserForm,
    });

    expect(userNameFieldErrorState).toEqual(true);
    expect(userRoleFieldErrorState).toEqual(true);
    expect(userEmailFieldErrorState).toEqual(true);
    expect(userPasswordFieldErrorState).toEqual(true);
  });

});