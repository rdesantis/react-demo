import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage, {initializeDates, updateTimes} from './components/booking/BookingPage';
import BookingForm from './components/booking/BookingForm';

test('Renders the BookingPage header', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Find a table for any occasion");
  expect(headingElement).toBeInTheDocument();
});

test('User can submit the BookingForm', () => {
  let state = {
    dateIndex: 0,
    timeIndex: 0,
    guests: 2,
    occasion: '',

    availableDates: ['6/28/2024', '6/29/2024'],
    availableTimes: ['20:00', '21:00', '22:00'],
  };
  const dispatch = ({key, value}) => {state[key] = value;};

  const handleSubmit = jest.fn();
  render(<BookingForm reducer={[state, dispatch]} onSubmit={handleSubmit} />);

  const dateInput = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateInput, { target: { value: 1 } });

  const timeInput = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeInput, { target: { value: 2 } });

  const submitButton = screen.getByDisplayValue("Let's go!");
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    dateIndex: 1,
    timeIndex: 2,
    guests: 2,
    occasion: ''
  });
});

test('Initializes booking dates', () => {
  expect(initializeDates()[0]).toBe(new Date().toLocaleDateString());
});

test('Updates booking times', () => {
  expect(updateTimes(0)[0]).toBe('20:00');
});
