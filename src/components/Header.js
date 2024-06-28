import { Link } from "react-router-dom";
import Nav from './Nav';
import Hamburger from "./Hamburger";

const Header = () => {
    return (
        <header>
            <Hamburger />
            <div className='logo'>
                <Link to='/'>
                    <img src='Horizontal logo.png' alt='logo' className='icon'/>
                </Link>
            </div>
            <div className='nav'>
                <Nav />
            </div>
            <div className='dummy'></div>
        </header>
    );
};

export default Header;
