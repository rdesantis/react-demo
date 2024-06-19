import Nav from './Nav';

function Header() {
    return (
        <header>
            <section className='hamburger'>
                <img src='Hamburger menu.svg' alt='hamburger' />
            </section>
            <section className='logo'>
                <img src='Horizontal logo.png' alt='logo'/>
            </section>
            <section className='nav'>
                <Nav />
            </section>
            <section className='dummy'></section>
        </header>
    );
};

export default Header;
