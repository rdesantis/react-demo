import { useReducer } from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom"

import {initializeAPI, fetchAPI} from "./APIMock";
import BookingPage, {initializeDates, updateTimes} from './components/booking/BookingPage';
import BookingForm from './components/booking/BookingForm';
import PersonalForm from './components/personal/PersonalForm';
import PersonalPage from "./components/personal/PersonalPage";

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
  render(<MemoryRouter><BookingPage /></MemoryRouter>);
  const headingElement = screen.getByText("Find a table for any occasion!");
  expect(headingElement).toBeInTheDocument();
});

test('Persists the BookingPage state', () => {
  forceAPIDates();

  localStorage.clear();

  render(<MemoryRouter><BookingPage /></MemoryRouter>);

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

  render(<MemoryRouter><BookingPage /></MemoryRouter>);

  const dateInput = screen.getByLabelText(/Choose date/);
  const timeInput = screen.getByLabelText(/Choose time/);
  const guestsInput = screen.getByLabelText(/Number of guests/);
  const occasionInput = screen.getByLabelText(/Occasion/);

  expect(dateInput).toHaveTextContent('6/29/2024');
  expect(timeInput).toHaveTextContent('19:00');
  expect(guestsInput).toHaveValue(4);
  expect(occasionInput).toHaveTextContent('Birthday');
});

const BookingFormScaffold = ({handleSubmit}) => {
  const availableDates = forceAPIDates();
  const availableTimes = fetchAPI('6/28/2024');

  const reducer = (state, action) => {
    let newState = {...state, [action.key]: action.value};
    return newState;
  }
  const initialState = {
    resDate: '6/28/2024',
    resTime: '20:00',
    guests: 2,
    occasion: '',

    availableDates: availableDates,
    availableTimes: availableTimes,
  };
  const [state, dispatch] = useReducer(reducer, initialState);;

  return <BookingForm reducer={[state, dispatch]} onSubmit={handleSubmit} />
};

const expectSubmitDisabledIfBlank = (submitButton, field, restoredValue) => {
  fireEvent.change(field, { target: { value: '' } });
  expect(submitButton).toBeDisabled();
  fireEvent.change(field, { target: { value: restoredValue } });
  expect(submitButton).not.toBeDisabled();
}

test('Validates and submits the BookingForm', () => {
  const handleSubmit = jest.fn();
  render(<BookingFormScaffold handleSubmit={handleSubmit} />);

  const dateInput = screen.getByLabelText(/Choose date/);
  const timeInput = screen.getByLabelText(/Choose time/);
  const guestsInput = screen.getByLabelText(/Number of guests/);
  const submitButton = screen.getByDisplayValue("Continue");

  fireEvent.change(dateInput, { target: { value: '6/29/2024' } });
  fireEvent.change(timeInput, { target: { value: '21:00' } });
  expectSubmitDisabledIfBlank(submitButton, guestsInput, '3');

  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    resDate: '6/29/2024',
    resTime: '21:00',
    guests: '3',
    occasion: ''
  });
});

test('Renders the PersonalPage header', () => {
  let booking = {
    resDate: '6/29/2024',
    resTime: '19:00',
    guests: '4',
    occasion: 'Birthday'
  };

  render(<MemoryRouter initialEntries={[{state: booking}]}><PersonalPage /></MemoryRouter>);
  const headingElement = screen.getByText("Tell us who this table is for...");
  expect(headingElement).toBeInTheDocument();
});

const PersonalFormScaffold = ({handleSubmit}) => {
  const reducer = (state, action) => {
    let newState = {...state, [action.key]: action.value};
    return newState;
  }
  const initialState = {
    firstName: 'first',
    lastName: 'last',
    phone: 'phone',
    email: 'email',
    password: 'password'
  };
  const [state, dispatch] = useReducer(reducer, initialState);;

  return <PersonalForm reducer={[state, dispatch]} onSubmit={handleSubmit} />
};

test('Validates and submits the PersonalForm', () => {
  const handleSubmit = jest.fn();
  render(<PersonalFormScaffold handleSubmit={handleSubmit} />);

  const firstNameInput = screen.getByLabelText(/First name/);
  const lastNameInput = screen.getByLabelText(/Last name/);
  const phoneInput = screen.getByLabelText(/Phone number/);
  const emailInput = screen.getByLabelText(/Email/);
  const passwordInput = screen.getByLabelText(/Password/);
  const submitButton = screen.getByDisplayValue("Let's go!");

  expectSubmitDisabledIfBlank(submitButton, firstNameInput, 'first2');
  expectSubmitDisabledIfBlank(submitButton, lastNameInput, 'last2');
  expectSubmitDisabledIfBlank(submitButton, phoneInput, 'phone2');
  expectSubmitDisabledIfBlank(submitButton, emailInput, 'email2');
  expectSubmitDisabledIfBlank(submitButton, passwordInput, 'password2');

  fireEvent.click(submitButton);
  expect(handleSubmit).toHaveBeenCalledWith({
    firstName: 'first2',
    lastName: 'last2',
    phone: 'phone2',
    email: 'email2',
    password: 'password2'
  });
});
