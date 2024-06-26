const BookingForm = (props) => {
    const [availableTimes, setAvailableTimes] = props.availableTimes;
    const [booking, setBooking] = props.booking;

    const handleChange = (key) => {
        return (e) => {setBooking({...booking, [key]: e.target.value})};
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let remainingTimes = [...availableTimes];
        remainingTimes[booking.dateIndex].resTimes.splice(booking.timeIndex, 1);
        setAvailableTimes(remainingTimes);
        // TODO
        alert(`submitted ${JSON.stringify(booking)}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <select id="res-date" value={booking.dateIndex} onChange={handleChange('dateIndex')}>
                {availableTimes.map((t, i) => <option value={i}>{t.resDate}</option>)}
            </select>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={booking.timeIndex} onChange={handleChange('timeIndex')}>
                {availableTimes[booking.dateIndex].resTimes.map((t, i) => <option value={i}>{t}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="2" min="1" max="10" id="guests" value={booking.guests} onChange={handleChange('guests')} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={booking.occasion} onChange={handleChange('occasion')}>
                <option></option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;
