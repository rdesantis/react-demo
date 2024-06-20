import ReservationHero from "./Hero";
import ReservationBasics from "./Basics";
import SeatingOptions from "./SeatingOptions";

const Reservation = () => {
    return (
        <>
            <ReservationHero sectionStyle='hero' />
            <ReservationBasics sectionStyle='second' />
            <SeatingOptions sectionStyle='third' />
        </>
    );
}

export default Reservation;
