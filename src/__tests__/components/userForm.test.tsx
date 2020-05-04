import React from 'react';
import {
  render,
  RenderResult,
  cleanup,
  fireEvent
} from '@testing-library/react';
import { SignUpUserForm } from 'src/components';
import {
  userFormTestID,
  userFormNameFieldTestID,
  userFormRoleFieldTestID,
  userFormEmailFieldTestID,
  userFormPasswordFieldTestID,
  primaryButtonTestID,
} from 'src/constants/testIDs';
import { t } from 'src/utils/i18n';

describe('test tab panel component', () => {
  const userNameFieldValue = 'userNameFieldValue';
  let userNameFieldError = false;
  const userRoleFieldValue = 'userRoleFieldValue';
  let userRoleFieldError = false;
  const userEmailFieldValue = 'userEmailFieldValue';
  let userEmailFieldError = false;
  const userPasswordFieldValue = 'userPasswordFieldValue';
  let userPasswordFieldError = false;
  const spyOnChangeHandler = jest.fn();
  const spyOnBlurHandler = jest.fn();
  const spyOnSubmitHandler = jest.fn();

  let form: RenderResult;

  beforeEach(() => {
    form = render(
      <SignUpUserForm
        userNameFieldValue={userNameFieldValue}
        userNameFieldError={userNameFieldError}
        userRoleFieldValue={userRoleFieldValue}
        userRoleFieldError={userRoleFieldError}
        userEmailFieldValue={userEmailFieldValue}
        userEmailFieldError={userEmailFieldError}
        userPasswordFieldValue={userPasswordFieldValue}
        userPasswordFieldError={userPasswordFieldError}
        handleChange={spyOnChangeHandler}
        handleBlur={spyOnBlurHandler}
        handleSubmit={spyOnSubmitHandler}
      />
    );
  });

  afterEach(cleanup);

  it('renders user form snd children', () => {
    const { getByTestId } = form;
    const userForm = getByTestId(userFormTestID);
    const nameField = getByTestId(userFormNameFieldTestID);
    const roleField = getByTestId(userFormRoleFieldTestID);
    const emailField = getByTestId(userFormEmailFieldTestID);
    const passwordField = getByTestId(userFormPasswordFieldTestID);
    const submitButton = getByTestId(primaryButtonTestID);

    expect(userForm).toBeInTheDocument();
    expect(nameField).toBeInTheDocument();
    expect(roleField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('tests callbacks', () => {
    const { getByTestId } = form;

    const inputField = getByTestId(userFormNameFieldTestID)
      .querySelector('input[type="text"]') as HTMLInputElement;
    fireEvent.change(inputField, { target: { value: 'test value' } });
    expect(spyOnChangeHandler).toHaveBeenCalledTimes(1);
    fireEvent.blur(inputField);
    expect(spyOnBlurHandler).toHaveBeenCalledTimes(1);

    const button = getByTestId(primaryButtonTestID);
    fireEvent.click(button);
    expect(spyOnSubmitHandler).toHaveBeenCalledTimes(1);
  });

  it('tests error state', () => {
    userNameFieldError = true;
    userRoleFieldError = true;
    userEmailFieldError = true;
    userPasswordFieldError = true;

    const { rerender, getByText } = form;
    rerender(
      <SignUpUserForm
        userNameFieldValue={userNameFieldValue}
        userNameFieldError={userNameFieldError}
        userRoleFieldValue={userRoleFieldValue}
        userRoleFieldError={userRoleFieldError}
        userEmailFieldValue={userEmailFieldValue}
        userEmailFieldError={userEmailFieldError}
        userPasswordFieldValue={userPasswordFieldValue}
        userPasswordFieldError={userPasswordFieldError}
        handleChange={spyOnChangeHandler}
        handleBlur={spyOnBlurHandler}
        handleSubmit={spyOnSubmitHandler}
      />
    );

    const nameErrorHelper =
      getByText(t('userForm.userNameFieldErrorHelperText'));
    const roleErrorHelper =
      getByText(t('userForm.userRoleFieldErrorHelperText'));
    const emailErrorHelper =
      getByText(t('userForm.userEmailFieldErrorHelperText'));
    const passwordErrorHelper =
      getByText(t('userForm.userPasswordFieldErrorHelperText'));

    expect(nameErrorHelper).toBeInTheDocument();
    expect(roleErrorHelper).toBeInTheDocument();
    expect(emailErrorHelper).toBeInTheDocument();
    expect(passwordErrorHelper).toBeInTheDocument();
  });

  it('tests if matches with snapshot', () => {
    const { asFragment } = form;
    expect(asFragment()).toMatchSnapshot();
  });
});