const PersonalDetails = ({personal}) => {
    return (
        <table className='personal'>
            <tbody>
                <tr><td>First name:</td><td>{personal.firstName}</td></tr>
                <tr><td>Last name:</td><td>{personal.lastName}</td></tr>
                <tr><td>Phone number:</td><td>{personal.phone}</td></tr>
                <tr><td>Email:</td><td>{personal.email}</td></tr>
                <tr><td>Special request:</td><td>{personal.request}</td></tr>
            </tbody>
        </table>
    );
}

export default PersonalDetails;
