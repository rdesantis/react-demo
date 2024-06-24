import MajorSection from "../MajorSection";

const HomeHero = (props) => {
    return (
        <MajorSection id='home-hero' sectionStyle={props.sectionStyle}>
            <section id='home-hero-text'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </p>
            </section>
            <section id='home-hero-image'>
                <img src='food/Grilled Fish.png' alt='grilled fish'/>
            </section>
        </MajorSection>
    );
}

export default HomeHero;
