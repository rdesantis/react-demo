import { useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import HeroHeader from "../HeroHeader";
import MajorSection from "../MajorSection";
import BookingDetails from "../booking/BookingDetails";
import PersonalForm from "./PersonalForm";

const PersonalPage = () => {
    const location = useLocation();
    const booking = location.state;

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
        const result = {...booking, ...personal};
        alert(JSON.stringify(result));
        // navigate('/confirm', { state: result });
    };

    return (
        <MajorSection id='personal-hero' sectionStyle='hero'>
            <section id='personal-hero-header'>
                <HeroHeader />
            </section>
            <section id='personal-hero-reservation'>
                <h3>Claim your reservation</h3>
                <BookingDetails details={booking} />
                <section id='personal-hero-image'>
                    {(booking.seating === 'standard') ?
                        <img src='restaurant interior.jpg' alt='interior seating' /> :
                        <img src='restaurant deck.jpg' alt='deck seating' />
                    }
                </section>
            </section>
            <section id='personal-hero-form'>
                <PersonalForm reducer={[state, dispatch]} onSubmit={handleSubmit} />
            </section>
        </MajorSection>
    );
}

export default PersonalPage;
