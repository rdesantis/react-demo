import HeroHeader from "../HeroHeader";
import MajorSection from "../MajorSection";

const ReservationHero = (props) => {
    return (
        <MajorSection id='reservation-hero' sectionStyle={props.sectionStyle}>
            <section id='reservation-hero-text'>
                <HeroHeader />
                <h3>Find a table for any occasion</h3>
            </section>
            <section id='reservation-hero-images'>
                <img src='restaurant.jpg' alt='deck seating' />
                <img src='restaurant also.jpg' alt='interior seating' />
            </section>
        </MajorSection>
    );
}

export default ReservationHero;
