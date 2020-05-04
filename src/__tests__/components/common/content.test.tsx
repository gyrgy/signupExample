import React from 'react';
import { render } from '@testing-library/react';
import { Content } from 'src/components/common';

describe('test content', () =>{
  const childTextContent = 'Child';

  it('renders content component with a child', () => {
    const { getByText } = render(
      <Content>
        <div>{childTextContent}</div>
      </Content>
    );

    const child = getByText(childTextContent);
    expect(child).toBeInTheDocument();
  });

  it('tests if matches with snapshot', () => {
    const { asFragment } = render(
      <Content>
        <div>{childTextContent}</div>
      </Content>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});