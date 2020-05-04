import React from 'react';
import { render } from '@testing-library/react';
import { Fade } from 'src/components/common';

describe('test fade component', () =>{
  const childTextContent = 'Child';

  it('renders fade component with a child', () => {
    const { getByText } = render(
      <Fade fadeIn={true}>
        <div>{childTextContent}</div>
      </Fade>
    );

    const child = getByText(childTextContent);
    expect(child).toBeInTheDocument();
  });

  it('tests if matches with snapshot', () => {
    const { asFragment } = render(
      <Fade fadeIn={true}>
        <div>{childTextContent}</div>
      </Fade>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});