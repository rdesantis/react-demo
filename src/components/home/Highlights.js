import MajorSection from "../MajorSection";
import HighlightCard from "./HighlightCard";

const cards = [
    {
        name: 'Greek salad',
        image: 'food/Greek Salad.png',
        price: '$12.99',
        description:
            `The famous greek salad of crispy lettuce, peppers, olives
            and our Chicago style feta cheese, garnished with
            crunchy garlic and rosemary croutons.`
    },
    {
        name: 'Bruschetta',
        image: 'food/Bruschetta.png',
        price: '$ 5.99',
        description:
            `Our Bruschetta is made from grilled bread that has been
            smeared with garlic and seasoned with salt and olive oil.`
    },
    {
        name: 'Lemon Dessert',
        image: 'food/Lemon Dessert.png',
        price: '$ 5.00',
        description:
            `This comes straight from grandma’s recipe book,
            every last ingredient has been sourced and is
            as authentic as can be imagined.`
    },
];

const Highlights = (props) => {
    return (
        <MajorSection id='highlights' sectionStyle={props.sectionStyle}>
            <h1>This week's specials!</h1>
            <section id='highlight-cards'>
                {
                    cards.map(card => {
                        return <HighlightCard key={card.name} card={card} />
                    })
                }
            </section>
        </MajorSection>
    );
}

export default Highlights;
