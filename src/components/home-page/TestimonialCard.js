
const TestimonialCard = (props) => {
    const stars = (rating) => {
        return (
            <div className='stars'>
                { Array(rating).fill(null).map(i => <img key={i} src='star.png' alt='star' />) }
            </div>
        );
    }

    const card = props.card;
    return (
        <div className='testimonial-card'>
            { stars(card.rating) }
            <img className='testimonial-image' src={card.image} alt={card.name} />
            <h2 className='testimonial-name'>{card.name}</h2>
            <p className='testimonial-review'>{card.review}</p>
        </div>
    );
}

export default TestimonialCard;
