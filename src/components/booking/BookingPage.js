import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

import HeroHeader from "../HeroHeader";
import MajorSection from "../MajorSection";
import BookingForm from "./BookingForm";
import {initializeAPI, fetchAPI} from "../../APIMock";

export const initializeDates = () => {
    return initializeAPI();
}

export const updateTimes = (resDate) => {
    return fetchAPI(resDate);
}

const BookingPage = () => {
    const reducer = (state, action) => {
        let newState = {...state, [action.key]: action.value};
        if (action.key === 'resDate') {
            newState.availableTimes = updateTimes(action.value);
        }
        return newState;
    }

    const availableDates = initializeDates();
    const initialAvailableTimes = updateTimes(availableDates[0]);

    const initialState = {
        resDate: availableDates[0],
        resTime: initialAvailableTimes[0],
        guests: 2,
        occasion: '',
        seating: 'standard',

        availableDates: availableDates,
        availableTimes: initialAvailableTimes,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const navigate = useNavigate();
    const handleSubmit = (booking) => {
        navigate('/personal', { state: booking });
    };

    return (
        <MajorSection id='booking-hero' sectionStyle='hero'>
            <section id='booking-hero-text'>
                <HeroHeader />
                <h3>Find a table for any occasion</h3>
            </section>
            <section id='booking-hero-images'>
                <img src='restaurant interior.jpg' alt='interior seating' />
                <img src='restaurant deck.jpg' alt='deck seating' />
            </section>
            <section id='booking-hero-form'>
                <BookingForm reducer={[state, dispatch]} onSubmit={handleSubmit} />
            </section>
        </MajorSection>
    );
}

export default BookingPage;
