import { Link, useLocation } from "react-router-dom";

import HeroHeader from "../HeroHeader";
import MajorSection from "../MajorSection";
import BookingDetails from "../booking/BookingDetails";
import PersonalDetails from "../personal/PersonalDetails";

const ConfirmationPage = () => {
    const location = useLocation();
    const {booking, personal} = location.state;

    return (
        <MajorSection id='confirm-hero' sectionStyle='hero'>
            <section id='confirm-hero-header'>
                <HeroHeader />
            </section>
            <section id='confirm-hero-reservation'>
                <h4>Your reservation is confirmed!</h4>
                <PersonalDetails personal={personal} />
                <BookingDetails booking={booking} />
                <p>
                    To update your reservation, please visit our
                    <Link to='/reservations' className='link'> Reservations </Link>
                    page
                </p>
            </section>
            <section id='confirm-hero-image'>
                {(booking.seating === 'standard') ?
                    <img src='restaurant interior.jpg' alt='interior seating' /> :
                    <img src='restaurant deck.jpg' alt='deck seating' />
                }
            </section>
        </MajorSection>
    );
}

export default ConfirmationPage;
