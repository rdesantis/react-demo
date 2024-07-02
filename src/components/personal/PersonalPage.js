import { useSearchParams } from "react-router-dom";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

import HeroHeader from "../HeroHeader";
import MajorSection from "../MajorSection";
import BookingDetails from "../booking/BookingDetails";
import PersonalForm from "./PersonalForm";

const PersonalPage = () => {
    const [searchParams] = useSearchParams();

    let booking = {};
    searchParams
        .entries()
        .map(entry => entry
            .map(key_or_value => decodeURIComponent(key_or_value)))
        .forEach(([key, value]) => {booking[key] = value;});

    const reducer = (state, action) => {
        let newState = {...state, [action.key]: action.value};
        return newState;
    }

    const initialState = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: ''
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const navigate = useNavigate();
    const handleSubmit = (personal) => {
        alert(JSON.stringify({...booking, ...personal}));
        // const queryString = Object
        //     .entries({...booking, ...personal})
        //     .map(entry => entry
        //         .map(key_or_value => encodeURIComponent(key_or_value))
        //         .join('='))
        //     .join('&');
        // navigate(`/confirm?${queryString}`);
    };

    return (
        <MajorSection id='personal-hero' sectionStyle='hero'>
            <section id='personal-hero-text'>
                <HeroHeader />
                <h3>Claim your reservation</h3>
            </section>
            <section id='personal-hero-booking'>
                <BookingDetails details={booking} />
            </section>
            <section id='personal-hero-image'>
                <img src='restaurant interior.jpg' alt='interior seating' />
                <img src='restaurant deck.jpg' alt='deck seating' />
            </section>
            <section id='personal-hero-form'>
                <PersonalForm reducer={[state, dispatch]} onSubmit={handleSubmit} />
            </section>
        </MajorSection>
    );
}

export default PersonalPage;
