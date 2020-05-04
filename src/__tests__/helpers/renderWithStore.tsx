import React from 'react';
import { renderWithStore } from 'src/helpers';
import { ButtonPrimary } from 'src/components/common';
import { primaryButtonTestID } from 'src/constants/testIDs';

describe('test custom render', () => {
  const label = 'label';
  const spyOnClickHandler = jest.fn();

  it('renders a button component', () => {
    const { getByTestId } = renderWithStore(
      <ButtonPrimary label={label} onClick={spyOnClickHandler} />
    );

    const button = getByTestId(primaryButtonTestID);
    expect(button).toBeInTheDocument();
  });
});