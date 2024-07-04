import { useState } from "react";

const PersonalForm = ({reducer, onSubmit}) => {
    const [state, dispatch] = reducer;

    const [isTouched, setIsTouched] = useState(
        {firstName: false, lastName: false, phone: false, email: false, password: false}
    );

    const handleChange = (key) => {
        return (e) => {
            dispatch({key: key, value: e.target.value});
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(state);
    };

    const labeledTextInput = (label, id, field, type) => {
        type = type ?? 'text';
        let message;
        return (<>
            <label htmlFor={id}>{label}<sup>*</sup></label>
            <input type={type} id={id} value={state[field]} onChange={handleChange(field)}
                onBlur={() => setIsTouched({...isTouched, [field]: true})} />
            {
                (isTouched[field] && (message = validationMessage(label, field))) ?
                    <p className="field-error">{message}</p> :
                    null
            }
        </>);
    };

    const validationMessage = (label, field) => {
        return (field === 'password') ?
            (state.password.length < 6 ? `${label} must be at least 6 characters` : null) :
            (state[field].length === 0 ? `${label} is required` : null);
    };

    const isAnyFieldInvalid = () => {
        return !Object.keys(state).every(key => (validationMessage(key, key) === null));
    };

    return (
        <form onSubmit={handleSubmit}>
            {labeledTextInput("First name", "first-name", 'firstName')}
            {labeledTextInput("Last name", "last-name", 'lastName')}
            {labeledTextInput("Phone number", "phone", 'phone')}
            {labeledTextInput("Email", "email", 'email', 'email')}
            {labeledTextInput("Password", "password", 'password', 'password')}
            <label htmlFor='request'>Special request (optional)</label>
            <textarea id='request' value={state.request} onChange={handleChange('request')} />
            <input type="submit" className="button" value="Let's go!" disabled={isAnyFieldInvalid()} />
        </form>
    );
}

export default PersonalForm;
