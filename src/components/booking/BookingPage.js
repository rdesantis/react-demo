import { useState } from "react";

import HeroHeader from "../HeroHeader";
import MajorSection from "../MajorSection";
import BookingForm from "./BookingForm";

const BookingPage = () => {
    let today = new Date();
    let tomorrow = new Date(); tomorrow.setDate(today.getDate() + 1);
    let dayafter = new Date(); dayafter.setDate(tomorrow.getDate() + 1);

    // The following may be slow when called for many objects; see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    const dateImage = (d) => d.toLocaleDateString();

    today = dateImage(today);
    tomorrow = dateImage(tomorrow);
    dayafter = dateImage(dayafter);

    const availableTimes = useState([
        {
            resDate: today,
            resTimes: ['20:00', '21:00', '22:00', ]
        },
        {
            resDate: tomorrow,
            resTimes: ['18:00', '19:00', '21:00', '22:00', ]
        },
        {
            resDate: dayafter,
            resTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', ]
        },
    ]);

    const booking = useState({
        dateIndex: 0,
        timeIndex: 0,
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
                <BookingForm availableTimes={availableTimes} booking={booking} />
            </section>
        </MajorSection>
    );
}

export default BookingPage;
