import { useSearchParams } from "react-router-dom";

import HeroHeader from "../HeroHeader";
import MajorSection from "../MajorSection";
import BookingDetails from "../booking/BookingDetails";

const PersonalPage = () => {
    const [searchParams] = useSearchParams();

    let bookingDetails = {};
    searchParams
        .entries()
        .map(entry => entry
            .map(key_or_value => decodeURIComponent(key_or_value)))
        .forEach(([key, value]) => {bookingDetails[key] = value;});

    return (
        <MajorSection id='personal-hero' sectionStyle='hero'>
            <section id='personal-hero-text'>
                <HeroHeader />
                <h3>Claim your reservation</h3>
            </section>
            <section id='personal-hero-booking'>
                <BookingDetails details={bookingDetails} />
            </section>
            <section id='personal-hero-image'>
                <img src='restaurant interior.jpg' alt='interior seating' />
                <img src='restaurant deck.jpg' alt='deck seating' />
            </section>
            <section id='personal-hero-form'>
                {/* <BookingForm reducer={[state, dispatch]} onSubmit={handleSubmit} /> */}
            </section>
        </MajorSection>
    );
}

export default PersonalPage;
