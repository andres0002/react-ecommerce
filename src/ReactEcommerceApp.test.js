import { render, screen } from '@testing-library/react';
import { ReactEcommerceApp } from './ReactEcommerceApp';

test('renders learn react link', () => {
  render(<ReactEcommerceApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
