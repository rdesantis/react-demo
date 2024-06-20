import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Nav from './Nav';

const socials = [
    { icon: faFacebook, url: "https://facebook.com" },
    { icon: faTwitter, url: "https://twitter.com" },
    { icon: faInstagram, url: "https://instagram.com" },
    { icon: faLinkedin, url: "https://www.linkedin.com" },
];

const Footer = () => {
    return (
        <footer>
            <section className='logo'>
                <Link to='/'>
                    <img src='Vertical logo.png' alt='logo' height='100'/>
                </Link>
            </section>
            <section className='nav'>
                <h5>Website</h5>
                <Nav />
            </section>
            <section className='contact'>
                <h5>Contact</h5>
                <p>Little Lemon Bistro</p>
                <p>123 Main Street</p>
                <p>Chicago, IL 12345</p>
                <p>876-555-1234</p>
                <p><a href='mailto: little_lemon@example.com'>little_lemon@example.com</a></p>
            </section>
            <section className='socials'>
                <h5>Visit us on social media!</h5>
                <ul>
                    {
                        socials.map(social => {
                            return (
                                <li key={social.url}><a href={social.url}>
                                    <FontAwesomeIcon icon={social.icon} size="2x" />
                                </a></li>
                            );
                        })
                    }
                </ul>
            </section>
        </footer>
    );
};

export default Footer;
