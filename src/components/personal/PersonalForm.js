import { useState } from "react";

// const LabeledTextInput = ({label, id, field, type, context}) => {
//     type = type ?? 'text';
//     return (<>
//         <label htmlFor={id}>{label}</label>
//         <input type={type} id={id} value={context.state[field]} onChange={context.handleChange(field)}
//             onBlur={() => context.setIsTouched({...context.isTouched, [field]: true})} />
//         {
//             !context.isTouched[field] ? null :
//                 // <ValidationMessage label={label} field={field} context={context} />
//                 validationMessage(label, field, context)
//         }
//     </>);
// };

// const ValidationMessage = ({label, field, context}) => {
//     const message = (field === 'password') ?
//         (context.state.password.length < 6 ? `${label} must be at least 6 characters` : null) :
//         (context.state[field].length === 0 ? `${label} is required` : null);
//     const isFieldValid = (message === null);
//     context.setIsValid({...context.isValid, [field]: isFieldValid});

//     return isFieldValid ? null :
//         <p className="field-error">{message}</p>;
// }

const PersonalForm = (props) => {
    const [state, dispatch] = props.reducer;

    const allFalse = {firstName: false, lastName: false, phone: false, email: false, password: false};
    const [isTouched, setIsTouched] = useState({...allFalse});
    const [isValid, setIsValid] = useState({...allFalse});

    const handleChange = (key) => {
        return (e) => {
// alert(`Change: ${JSON.stringify({key:key, value: e.target.value})}`);
            dispatch({key: key, value: e.target.value});
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {availableDates, availableTimes, ...result} = state;
        props.onSubmit(result);
    };

    const labeledTextInput = (label, id, field, type) => {
        type = type ?? 'text';
        return (<>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} value={state[field]} onChange={handleChange(field)}
                onBlur={() => setIsTouched({...isTouched, [field]: true})} />
            {
                !isTouched[field] ? null :
                    validationMessage(label, field)
            }
        </>);
    };

    const validationMessage = (label, field) => {
        const message = (field === 'password') ?
            (state.password.length < 6 ? `${label} must be at least 6 characters` : null) :
            (state[field].length === 0 ? `${label} is required` : null);
        const isFieldValid = (message === null);
        // TODO: Figure out why the following line causes the page to hang!!!
        // setIsValid({...isValid, [field]: isFieldValid});

        return isFieldValid ? null :
            <p className="field-error">{message}</p>;
    }

    // const context = {state, isTouched, setIsTouched, isValid, setIsValid, handleChange};

    return (
        <form onSubmit={handleSubmit}>
            {/* <LabeledTextInput label="First name" id="first-name" field='firstName' context={context} />
            <LabeledTextInput label="Last name" id="last-name" field='lastName' context={context} />
            <LabeledTextInput label="Phone number name" id="phone" field='phone' context={context} />
            <LabeledTextInput label="Email" id="email" field='email' type='email' context={context} />
            <LabeledTextInput label="Password" id="password" field='password' type='password' context={context} /> */}
            {labeledTextInput("First name", "first-name", 'firstName')}
            {labeledTextInput("Last name", "last-name", 'lastName')}
            {labeledTextInput("Phone number name", "phone", 'phone')}
            {labeledTextInput("Email", "email", 'email', 'email')}
            {labeledTextInput("Password", "password", 'password', 'password')}
            <label htmlFor='request'>Special request (optional)</label>
            <textarea id='request' value={state.request} onChange={handleChange('request')} />
            <input type="submit" className="button" value="Let's go!"
                disabled={!Object.values(isValid).every(value => value)}
            />
        </form>
    );
}

export default PersonalForm;
