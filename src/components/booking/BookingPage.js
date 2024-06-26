import BookingHero from "./Hero";
import BookingBasics from "./Basics";
import SeatingOptions from "./SeatingOptions";

const BookingPage = () => {
    return (
        <>
            <BookingHero sectionStyle='hero' />
            <BookingBasics sectionStyle='second' />
            <SeatingOptions sectionStyle='third' />
        </>
    );
}

export default BookingPage;
