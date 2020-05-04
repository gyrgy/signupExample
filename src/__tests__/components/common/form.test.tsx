import React from 'react';
import { render } from '@testing-library/react';
import { Form } from 'src/components/common';

describe('test form component', () =>{
  const childTextContent = 'Child';

  it('renders form component with a child', () => {
    const { getByText } = render(
      <Form>
        <div>{childTextContent}</div>
      </Form>
    );

    const child = getByText(childTextContent);
    expect(child).toBeInTheDocument();
  });

  it('tests if matches with snapshot', () => {
    const { asFragment } = render(
      <Form>
        <div>{childTextContent}</div>
      </Form>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});