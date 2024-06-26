import { useState } from "react";

const BookingForm = () => {
    const [state, setState] = useState({
        resDate: new Date().toISOString().substring(0, 10),
        resTime: '17:00',
        guests: 2,
        occasion: '',
    });

    const handleChange = (key) => {
        return (e) => {setState({...state, [key]: e.target.value})};
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO
        alert(`submitted ${state.resDate} ${state.resTime} ${state.guests} ${state.occasion}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={state.resDate} onChange={handleChange('resDate')} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={state.resTime} onChange={handleChange('resTime')}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="2" min="1" max="10" id="guests" value={state.guests} onChange={handleChange('guests')} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={state.occasion} onChange={handleChange('occasion')}>
                <option></option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;
