import { render, screen } from '@testing-library/react';
import BookingPage from './components/booking/BookingPage';

test('Renders the BookingPage button', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Find a table for any occasion");
  expect(headingElement).toBeInTheDocument();
});
