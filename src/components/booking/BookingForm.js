const BookingForm = (props) => {
    const [state, dispatch] = props.reducer;

    const handleChange = (key) => {
        return (e) => {
            dispatch({key: key, value: e.target.value});
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO
        alert(`submitted: ${JSON.stringify(state)}`);
    };

    const buildOptions = (key) => {
        return state[key].map((dateOrTime, i) => <option key={i} value={i}>{dateOrTime}</option>);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <select id="res-date" value={state.dateIndex} onChange={handleChange('dateIndex')}>
                {buildOptions('availableDates')}
            </select>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={state.timeIndex} onChange={handleChange('timeIndex')}>
                {buildOptions('availableTimes')}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="2" min="1" max="10" id="guests" value={state.guests} onChange={handleChange('guests')} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={state.occasion} onChange={handleChange('occasion')}>
                <option></option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" className="button" value="Let's go!" />
        </form>
    );
}

export default BookingForm;
