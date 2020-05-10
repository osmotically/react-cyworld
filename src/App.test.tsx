import React from 'react';
import { render } from '@testing-library/react';
import CyworldMain from './CyworldMain';

test('renders learn react link', () => {
  const { getByText } = render(<CyworldMain />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
