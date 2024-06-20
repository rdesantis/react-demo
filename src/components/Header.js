import { Link } from "react-router-dom";
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <section className='hamburger'>
                <img src='Hamburger menu.svg' alt='hamburger' />
            </section>
            <section className='logo'>
                <Link to='/'>
                    <img src='Horizontal logo.png' alt='logo'/>
                </Link>
            </section>
            <section className='nav'>
                <Nav />
            </section>
            <section className='dummy'></section>
        </header>
    );
};

export default Header;
