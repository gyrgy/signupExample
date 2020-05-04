import React from 'react';
import {
  render,
  RenderResult,
  cleanup,
  fireEvent
} from '@testing-library/react';
import { SignUpPrivacyForm } from 'src/components';
import {
  privacyFormTestID,
  privacyFormTrayCheckboxTestID,
  privacyFormOtherCheckboxTestID,
  primaryButtonTestID
} from 'src/constants/testIDs';

describe('test tab panel component', () => {
  let trayProductUpdatesChecked = false;
  let otherProductsUpdatesChecked = false;
  const spyOnChangeHandler = jest.fn();
  const spyOnSubmitHandler = jest.fn();
  let form: RenderResult;

  beforeEach(() => {
    form = render(
      <SignUpPrivacyForm
        trayProductUpdatesChecked={trayProductUpdatesChecked}
        otherProductsUpdatesChecked={otherProductsUpdatesChecked}
        onChange={spyOnChangeHandler}
        submitForm={spyOnSubmitHandler}
      />
    );
  });

  afterEach(cleanup);

  it('renders privacy form and children', () => {
    const { getByTestId } = form;
    const privacyForm = getByTestId(privacyFormTestID);
    const trayInput = getByTestId(privacyFormTrayCheckboxTestID);
    const otherInput = getByTestId(privacyFormOtherCheckboxTestID);
    const button = getByTestId(primaryButtonTestID);

    expect(privacyForm).toBeInTheDocument();
    expect(trayInput).toBeInTheDocument();
    expect(otherInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('tests tray checkbox to be checked', () => {
    trayProductUpdatesChecked = true;
    const { rerender, getByTestId } = form;
    rerender(
      <SignUpPrivacyForm
        trayProductUpdatesChecked={trayProductUpdatesChecked}
        otherProductsUpdatesChecked={otherProductsUpdatesChecked}
        onChange={spyOnChangeHandler}
        submitForm={spyOnSubmitHandler}
      />
    );

    const trayInputField = getByTestId(privacyFormTrayCheckboxTestID)
      .querySelector('input[type="checkbox"]') as HTMLInputElement;
    const otherInputField = getByTestId(privacyFormOtherCheckboxTestID)
      .querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(trayInputField).toHaveProperty('checked', true);
    expect(otherInputField).toHaveProperty('checked', false);
  });

  it('tests other checkbox to be checked', () => {
    trayProductUpdatesChecked = false;
    otherProductsUpdatesChecked = true;
    const { rerender, getByTestId } = form;
    rerender(
      <SignUpPrivacyForm
        trayProductUpdatesChecked={trayProductUpdatesChecked}
        otherProductsUpdatesChecked={otherProductsUpdatesChecked}
        onChange={spyOnChangeHandler}
        submitForm={spyOnSubmitHandler}
      />
    );

    const trayInputField = getByTestId(privacyFormTrayCheckboxTestID)
      .querySelector('input[type="checkbox"]') as HTMLInputElement;
    const otherInputField = getByTestId(privacyFormOtherCheckboxTestID)
      .querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(trayInputField).toHaveProperty('checked', false);
    expect(otherInputField).toHaveProperty('checked', true);
  });

  it('test callbacks', () => {
    const { getByTestId } = form;
    const trayInputField = getByTestId(privacyFormTrayCheckboxTestID)
      .querySelector('input[type="checkbox"]') as HTMLInputElement;
    const otherInputField = getByTestId(privacyFormOtherCheckboxTestID)
      .querySelector('input[type="checkbox"]') as HTMLInputElement;
    const button = getByTestId(primaryButtonTestID);

    fireEvent.click(trayInputField);
    fireEvent.click(otherInputField);
    fireEvent.click(button);

    expect(spyOnChangeHandler).toBeCalledTimes(2);
    expect(spyOnSubmitHandler).toBeCalledTimes(1);
  });

  it('tests if matches with snapshot', () => {
    const { asFragment } = form;
    expect(asFragment()).toMatchSnapshot();
  });
});