import { fireEvent, render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom"

import {initializeAPI, fetchAPI} from "./APIMock";
import BookingPage, {initializeDates, updateTimes} from './components/booking/BookingPage';
import BookingForm from './components/booking/BookingForm';

const forceAPIDates = () => {
  return initializeAPI(new Date('2024-06-28T12:00:00.000+05:00'));
}

test('Initializes booking dates', () => {
  forceAPIDates();
  expect(initializeDates()[0]).toBe('6/28/2024');
});

test('Updates booking times', () => {
  forceAPIDates();
  let [firstDate] = initializeDates();
  expect(updateTimes(firstDate)[0]).toBe('20:00');
});

test('Renders the BookingPage header', () => {
  render(<BrowserRouter><BookingPage /></BrowserRouter>);
  const headingElement = screen.getByText("Find a table for any occasion!");
  expect(headingElement).toBeInTheDocument();
});

test('Persists the BookingPage state', () => {
  forceAPIDates();

  localStorage.clear();

  render(<BrowserRouter><BookingPage /></BrowserRouter>);

  const dateInput = screen.getByLabelText(/Choose date/);
  const timeInput = screen.getByLabelText(/Choose time/);

  fireEvent.change(dateInput, { target: { value: '6/30/2024' } });
  fireEvent.change(timeInput, { target: { value: '21:00' } });

  let savedState = localStorage.getItem('booking');
  expect(savedState).not.toBeNull();
  savedState = JSON.parse(savedState);

  expect(savedState.resDate).toBe('6/30/2024');
  expect(savedState.resTime).toBe('21:00');
});

test('Retrieves the BookingPage state', () => {
  const availableDates = forceAPIDates();
  const availableTimes = fetchAPI('6/29/2024');

  let state = {
    resDate: '6/29/2024',
    resTime: '19:00',
    guests: '4',
    occasion: 'Birthday',

    availableDates: availableDates,
    availableTimes: availableTimes,
  };
  localStorage.setItem('booking', JSON.stringify(state));

  render(<BrowserRouter><BookingPage /></BrowserRouter>);

  const dateInput = screen.getByLabelText(/Choose date/);
  const timeInput = screen.getByLabelText(/Choose time/);
  const guestsInput = screen.getByLabelText(/Number of guests/);
  const occasionInput = screen.getByLabelText(/Occasion/);

  expect(dateInput).toHaveTextContent('6/29/2024');
  expect(timeInput).toHaveTextContent('19:00');
  expect(guestsInput).toHaveValue(4);
  expect(occasionInput).toHaveTextContent('Birthday');
});

test('Submits the BookingForm', () => {
  const availableDates = forceAPIDates();
  const availableTimes = fetchAPI('6/28/2024');

  let state = {
    resDate: '6/28/2024',
    resTime: '20:00',
    guests: 2,
    occasion: '',

    availableDates: availableDates,
    availableTimes: availableTimes,
  };
  const dispatch = ({key, value}) => {state[key] = value;};

  const handleSubmit = jest.fn();
  render(<BookingForm reducer={[state, dispatch]} onSubmit={handleSubmit} />);

  const dateInput = screen.getByLabelText(/Choose date/);
  const timeInput = screen.getByLabelText(/Choose time/);
  const submitButton = screen.getByDisplayValue("Continue");

  fireEvent.change(dateInput, { target: { value: '6/29/2024' } });
  fireEvent.change(timeInput, { target: { value: '21:00' } });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    resDate: '6/29/2024',
    resTime: '21:00',
    guests: 2,
    occasion: ''
  });
});

