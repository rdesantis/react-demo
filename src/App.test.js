import { fireEvent, render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom"

import {initializeAPI, fetchAPI} from "./APIMock";
import BookingPage, {initializeDates, updateTimes} from './components/booking/BookingPage';
import BookingForm from './components/booking/BookingForm';

test('Renders the BookingPage header', () => {
  render(<BrowserRouter><BookingPage /></BrowserRouter>);
  const headingElement = screen.getByText("Find a table for any occasion");
  expect(headingElement).toBeInTheDocument();
});

test('User can submit the BookingForm', () => {
  const availableDates = initializeAPI(new Date('2024-06-28T12:00:00.000+05:00'));
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
  fireEvent.change(dateInput, { target: { value: '6/29/2024' } });

  const timeInput = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeInput, { target: { value: '21:00' } });

  const submitButton = screen.getByDisplayValue("Continue");
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    resDate: '6/29/2024',
    resTime: '21:00',
    guests: 2,
    occasion: ''
  });
});

test('Initializes booking dates', () => {
  expect(initializeDates()[0]).toBe(new Date().toLocaleDateString());
});

test('Updates booking times', () => {
  let [firstDate] = initializeDates();
  expect(updateTimes(firstDate)[0]).toBe('20:00');
});
