import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import { InputField } from 'src/components/common';
import { inputFieldTestID } from 'src/constants/testIDs';
import { InputFieldType } from 'src/constants/types';

describe('test input field component', () =>{
  let type: InputFieldType ='text';
  const label = 'label';
  const name = 'name';
  const spyOnChangeHandler = jest.fn();
  const spyOnBlurHandler = jest.fn();
  const value = 'text value';
  const disabled = false;
  const required = true;
  let error = false;
  let errorHelperText = '';

  let input: RenderResult;

  beforeEach(() => {
    input = render(
      <InputField
        type={type}
        label={label}
        name={name}
        onChange={spyOnChangeHandler}
        onBlur={spyOnBlurHandler}
        value={value}
        disabled={disabled}
        required={required}
        error={error}
        errorHelperText={errorHelperText}
      />
    );
  });

  it('tests text type input field renders correctly', () => {
    const { getByTestId, getByText } = input;
    const fieldLabel = getByText(label);
    const field = getByTestId(inputFieldTestID)
      .querySelector('input[type="text"]') as HTMLInputElement;

    expect(fieldLabel).toBeInTheDocument();
    expect(field).toHaveProperty('type', type);
    expect(field).toHaveProperty('name', name);
    expect(field).toHaveProperty('value', value);
  });

  it('tests password input type rendered', () => {
    type = 'password';
    const { rerender, getByTestId } = input;
    rerender(<InputField
      type={type}
      label={label}
      name={name}
      onChange={spyOnChangeHandler}
      onBlur={spyOnBlurHandler}
      value={value}
      disabled={disabled}
      required={required}
      error={error}
      errorHelperText={errorHelperText}
    />);
    const field = getByTestId(inputFieldTestID)
      .querySelector('input[type="password"]') as HTMLInputElement;
    expect(field).toHaveProperty('type', type);
  });

  it('tests number input type rendered', () => {
    type = 'number';
    const { rerender, getByTestId } = input;
    rerender(<InputField
      type={type}
      label={label}
      name={name}
      onChange={spyOnChangeHandler}
      onBlur={spyOnBlurHandler}
      value={value}
      disabled={disabled}
      required={required}
      error={error}
      errorHelperText={errorHelperText}
    />);
    const field = getByTestId(inputFieldTestID)
      .querySelector('input[type="number"]') as HTMLInputElement;
    expect(field).toHaveProperty('type', type);
  });

  it('tests type input field error state', () => {
    error = true;
    errorHelperText = 'error helper text';
    const { rerender, getByText } = input;
    rerender(<InputField
      type={type}
      label={label}
      name={name}
      onChange={spyOnChangeHandler}
      onBlur={spyOnBlurHandler}
      value={value}
      disabled={disabled}
      required={required}
      error={error}
      errorHelperText={errorHelperText}
    />);
    const errorText = getByText(errorHelperText);
    expect(errorText).toBeInTheDocument();
  });

  it('tests callbacks', () => {
    const { getByTestId } = input;
    const inputField = getByTestId(inputFieldTestID)
      .querySelector('input[type="number"]') as HTMLInputElement;

    fireEvent.change(inputField, { target: { value: 'test value' } });
    expect(spyOnChangeHandler).toHaveBeenCalledTimes(1);

    fireEvent.blur(inputField);
    expect(spyOnBlurHandler).toHaveBeenCalledTimes(1);
  });

  it('tests if matches with snapshot', () => {
    const { asFragment } = input;
    expect(asFragment()).toMatchSnapshot();
  });
});