import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { ButtonPrimary } from 'src/components/common';
import { primaryButtonTestID } from 'src/constants/testIDs';

describe('test primary button', () =>{
  const spyOnClickHandler = jest.fn();
  const testLabel = 'Test Label';
  let buttonComponent: RenderResult;

  beforeEach(() => {
    buttonComponent = render(
      <ButtonPrimary label={testLabel} onClick={spyOnClickHandler} />
    );
  });

  it('tests primary button label', () => {
    const { getByText } = buttonComponent;
    const label = getByText(testLabel);
    expect(label).toBeInTheDocument();
  });

  it('tests button callback', () => {
    const { getByTestId } = buttonComponent;
    const button = getByTestId(primaryButtonTestID);
    fireEvent.click(button);
    expect(spyOnClickHandler).toBeCalledTimes(1);
  });

  it('tests if matches with snapshot', () => {
    const { asFragment } = buttonComponent;
    expect(asFragment()).toMatchSnapshot();
  });
});