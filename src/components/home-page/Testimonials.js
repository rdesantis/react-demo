import MajorSection from "../MajorSection";
import TestimonialCard from "./TestimonialCard";

const cards = [
    {
        rating: 4,
        image: 'people/young guy.png',
        name: 'John Doe',
        review: 'Good stuff'
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
