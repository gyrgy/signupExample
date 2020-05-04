import React from 'react';
import { render } from '@testing-library/react';
import { SignUpDone } from 'src/components';

describe('test done form', () => {
  it('tests if matches with snapshot', () => {
    const { asFragment } = render(<SignUpDone />);
    expect(asFragment()).toMatchSnapshot();
  });
});