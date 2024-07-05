const BookingForm = ({reducer, onSubmit}) => {
    const [state, dispatch] = reducer;

    const handleChange = (key) => {
        return (e) => {
            dispatch({key: key, value: e.target.value});
        };
    };

    const handleOptionChange = (value) => {
        return (e) => {
            dispatch({key: 'seating', value: value});
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {availableDates, availableTimes, ...result} = state;
        onSubmit(result);
    };

    const dropdownOptions = (label, id, field, choices) => {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <select id={id} value={state[field]} onChange={handleChange(field)}>
                    {buildOptions(choices)}
                </select>
            </>
        );
    };

    const buildOptions = (key) => {
        return state[key].map((dateOrTime) => <option key={dateOrTime}>{dateOrTime}</option>);
    };

    const seatingOption = (label, id, value) => {
        return (
            <div className='radio'>
                <label htmlFor={id}>{label}</label>
                <input
                    type="radio" id={id} name={id} value={value}
                    checked={state.seating === value} onChange={handleOptionChange(value)}
                />
            </div>
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            {dropdownOptions('Choose date', 'res-date', 'resDate', 'availableDates')}
            {dropdownOptions('Choose time', 'res-time', 'resTime', 'availableTimes')}
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="2" min="1" max="10" id="guests" value={state.guests} onChange={handleChange('guests')} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={state.occasion} onChange={handleChange('occasion')}>
                <option></option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <label htmlFor="seating">Seating options</label>
            {seatingOption('Standard', 'standard', 'standard')}
            {seatingOption('Outside', 'outside', 'outside')}
            <input type="submit" className="button" value="Continue" />
        </form>
    );
}

export default BookingForm;
