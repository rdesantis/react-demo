import HeroHeader from "../HeroHeader";
import MajorSection from "../MajorSection";
import BookingForm from "./BookingForm";

const BookingHero = (props) => {
    return (
        <MajorSection id='booking-hero' sectionStyle={props.sectionStyle}>
            <section id='booking-hero-text'>
                <HeroHeader />
                <h3>Find a table for any occasion</h3>
            </section>
            <section id='booking-hero-images'>
                <img src='restaurant interior.jpg' alt='interior seating' />
                <img src='restaurant deck.jpg' alt='deck seating' />
            </section>
            <section id='booking-hero-form'>
                <BookingForm />
            </section>
        </MajorSection>
    );
}

export default BookingHero;
