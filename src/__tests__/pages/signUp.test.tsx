import React from 'react';
import { renderWithStore } from 'src/helpers';
import { SignUp } from 'src/pages';
import {
  userFormTestID,
  primaryButtonTestID,
  userFormNameFieldTestID,
  userFormRoleFieldTestID,
  userFormEmailFieldTestID,
  userFormPasswordFieldTestID,
  privacyFormTestID,
  privacyFormTrayCheckboxTestID,
  privacyFormOtherCheckboxTestID,
  signUpDoneTestID,
} from 'src/constants/testIDs';
import { fireEvent, waitForElement } from '@testing-library/react';

describe('test sign up page', () => {
  it('renders sing up page', () => {
    renderWithStore( <SignUp />);
  });

  it('checks if only user form visible', () => {
    const { getByTestId, queryByTestId } = renderWithStore(<SignUp />);
    const userForm = getByTestId(userFormTestID);
    const privacyForm = queryByTestId(privacyFormTestID);
    const done = queryByTestId(signUpDoneTestID);
    expect(userForm).toBeInTheDocument();
    expect(privacyForm).not.toBeInTheDocument();
    expect(done).not.toBeInTheDocument();
  });

  it('tests happy path', async () => {
    const { getByTestId, queryByTestId } =
      renderWithStore( <SignUp />);

    // submit user form
    const nameField = getByTestId(userFormNameFieldTestID)
      .querySelector('input[type="text"]') as HTMLInputElement;

    const roleField = getByTestId(userFormRoleFieldTestID)
      .querySelector('input[type="text"]') as HTMLInputElement;

    const emailField = getByTestId(userFormEmailFieldTestID)
      .querySelector('input[type="text"]') as HTMLInputElement;

    const passwordField = getByTestId(userFormPasswordFieldTestID)
      .querySelector('input[type="password"]') as HTMLInputElement;

    const submitUserFormButton = getByTestId(primaryButtonTestID);

    fireEvent.change(nameField, { target: { value: 'name' } });
    fireEvent.change(roleField, { target: { value: 'role' } });
    fireEvent.change(emailField, {
      target: {
        value: 'example@example.com'
      }
    });
    fireEvent.change(passwordField, { target: { value: '1Abcdefgh' } });
    fireEvent.click(submitUserFormButton);

    // after submitting user form wait for privacy form to be mounted
    await waitForElement(() =>
      queryByTestId(privacyFormTestID)
    );

    const trayCheckbox = getByTestId(privacyFormTrayCheckboxTestID)
      .querySelector('input[type="checkbox"]') as HTMLInputElement;

    const otherCheckbox = getByTestId(privacyFormOtherCheckboxTestID)
      .querySelector('input[type="checkbox"]') as HTMLInputElement;

    const submitPrivacyFormButton = getByTestId(primaryButtonTestID);

    fireEvent.click(trayCheckbox);
    fireEvent.click(otherCheckbox);
    fireEvent.click(submitPrivacyFormButton);

    // after submitting user form wait for done component to be mounted
    await waitForElement(() =>
      queryByTestId(signUpDoneTestID)
    );
  });

  it('tests user form fields error state', () => {
    const { getByTestId, queryByText } = renderWithStore(<SignUp />);
    const roleField = getByTestId(userFormRoleFieldTestID).querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    const button = getByTestId(primaryButtonTestID);
    fireEvent.change(roleField, { target: { value: '<' } });
    fireEvent.click(button);
    const passwordError = queryByText(/The password has to be 9/i);
    expect(passwordError).toBeInTheDocument();
  });

  it('tests user form field on blur event', async () => {
    const { getByTestId, queryByText } = renderWithStore(<SignUp />);
    const nameField = getByTestId(userFormNameFieldTestID).querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;

    const roleField = getByTestId(userFormRoleFieldTestID).querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;

    nameField.focus();
    roleField.focus();

    const nameFieldError = queryByText(/This field is required and/i);
    expect(nameFieldError).toBeInTheDocument();
  });
});