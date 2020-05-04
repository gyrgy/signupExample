import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

describe('test tab panel component', () => {
  it('renders the app', () => {
    const { getByText } = render(<App />);
    const app = getByText('App');
    expect(app).toBeInTheDocument();
  });
});
