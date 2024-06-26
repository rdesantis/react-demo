import { useState } from "react";

import HeroHeader from "../HeroHeader";
import MajorSection from "../MajorSection";
import BookingForm from "./BookingForm";

const BookingPage = () => {
    const bookingState = useState({
        resDate: new Date().toISOString().substring(0, 10),
        resTime: '17:00',
        guests: 2,
        occasion: '',
    });

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
                <BookingForm state={bookingState} />
            </section>
        </MajorSection>
    );
}

export default BookingPage;
