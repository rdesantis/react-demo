const BookingDetails = (props) => {
    const booking = props.details;
    return (
        <table className='booking'>
            <tr><td>Date:</td><td>{booking.resDate}</td></tr>
            <tr><td>Time:</td><td>{booking.resTime}</td></tr>
            <tr><td>Number of guests:</td><td>{booking.guests}</td></tr>
            <tr><td>Occasion:</td><td>{booking.occasion}</td></tr>
            <tr><td>Seating:</td><td>{booking.seating}</td></tr>
        </table>
    );
}

export default BookingDetails;
