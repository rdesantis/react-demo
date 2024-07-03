import { useNavigate } from "react-router-dom";

import HeroHeader from "../HeroHeader";
import MajorSection from "../MajorSection";

const HomeHero = (props) => {
    const navigate = useNavigate();
    const book = () => {navigate('/book');}

    return (
        <MajorSection id='home-hero' sectionStyle={props.sectionStyle}>
            <section id='home-hero-text'>
                <HeroHeader />
                <p>
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </p>
                <button className='button' onClick={book}>Reserve a table</button>
            </section>
            <section id='home-hero-image'>
                <img src='food/Grilled Fish.png' alt='grilled fish'/>
            </section>
        </MajorSection>
    );
}

export default HomeHero;
