import Nav from "./Nav";

const Hamburger = () => {
    return (
        <>
            <div className='hamburger'>
                <img src='Hamburger menu.svg' alt='hamburger' className='icon'/>
                <Nav />
            </div>
        </>
    );
}

export default Hamburger;
