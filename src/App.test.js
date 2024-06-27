import { render, screen } from '@testing-library/react';
import BookingPage, {initializeDates, updateTimes} from './components/booking/BookingPage';

test('Renders the BookingPage header', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Find a table for any occasion");
  expect(headingElement).toBeInTheDocument();
});

test('Initializes booking dates', () => {
  expect(initializeDates()[0]).toBe(new Date().toLocaleDateString());
});

test('Updates booking times', () => {
  expect(updateTimes(0)[0]).toBe('20:00');
});
