import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { Checkbox } from 'src/components/common';
import { checkboxTestID } from 'src/constants/testIDs';

describe('test checkbox', () =>{
  const spyOnChangeHandler = jest.fn();
  const testName = 'Test Name';
  const testLabel = 'Test Label';
  const testChecked = false;
  let checkboxComponent: RenderResult;

  beforeEach(() => {
    checkboxComponent = render(
      <Checkbox
        name={testName}
        label={testLabel}
        checked={testChecked}
        onChange={spyOnChangeHandler}
      />
    );
  });

  it('tests checkbox label', () => {
    const { getByText } = checkboxComponent;
    const label = getByText(testLabel);
    expect(label).toBeInTheDocument();
  });

  it('tests checkbox callback', () => {
    const { getByTestId } = checkboxComponent;
    const checkbox = getByTestId(checkboxTestID)
      .querySelector('input[type="checkbox"]') as HTMLInputElement;

    fireEvent.click(checkbox);

    expect(spyOnChangeHandler).toBeCalledTimes(1);
  });

  it('tests if matches with snapshot', () => {
    const { asFragment } = checkboxComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});
