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
        if (state[field].length === 0) {
            return `Please provide a value for ${label}`;
        }
        switch (field) {
            case 'email': {
                const lastAtIndex = state.email.lastIndexOf('@');
                return (
                    (lastAtIndex === -1) ? `Please include an '@' in the middle of ${label}` :
                    (lastAtIndex === 0)  ? `Please include characters before the '@' in ${label}` :
                    (lastAtIndex === (state.email.length - 1)) ? `Please include characters after the last '@' in ${label}` :
                    null
                );
            }
            case 'password':
                return (state.password.length < 6) ? `Please include at least 6 characters in ${label}` : null;
            default:
                return null;
        }
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
            <input
                type="submit" className="button" value="Let's go!" disabled={isAnyFieldInvalid()}
                aria-label='Finalize your booking'
            />
        </form>
    );
}

export default PersonalForm;
