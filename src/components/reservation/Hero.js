import HeroHeader from "../HeroHeader";
import MajorSection from "../MajorSection";
import ReservationForm from "./Form";

const ReservationHero = (props) => {
    return (
        <MajorSection id='reservation-hero' sectionStyle={props.sectionStyle}>
            <section id='reservation-hero-text'>
                <HeroHeader />
                <h3>Find a table for any occasion</h3>
            </section>
            <section id='reservation-hero-images'>
                <img src='restaurant interior.jpg' alt='interior seating' />
                <img src='restaurant deck.jpg' alt='deck seating' />
            </section>
            <section id='reservation-hero-form'>
                <ReservationForm />
            </section>
        </MajorSection>
    );
}

export default ReservationHero;
