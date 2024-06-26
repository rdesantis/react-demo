import MajorSection from "../MajorSection";
import TestimonialCard from "./TestimonialCard";

const cards = [
    {
        rating: 5,
        image: 'people/young guy.png',
        name: 'John D',
        review: 'Always fresh and delicious!'
    },
    {
        rating: 4,
        image: 'people/older woman.png',
        name: 'Mary R',
        review: 'My go-to restaurant for tasty Mediterannean dishes.'
    },
    {
        rating: 4,
        image: 'people/young woman.png',
        name: 'Gloria G',
        review: 'Never fails to bring a smile to my face!'
    },
    {
        rating: 5,
        image: 'people/other young guy.png',
        name: 'Dieter M',
        review: 'Scrumptious... capisci?'
    },
];

const Testimonials = (props) => {
    return (
        <MajorSection id='testimonials' sectionStyle={props.sectionStyle}>
            <h1>Testimonials</h1>
            <section id='testimonial-cards'>
                {
                    cards.map(card => {
                        return <TestimonialCard key={card.name} card={card} />
                    })
                }
            </section>
        </MajorSection>
    );
}

export default Testimonials;
