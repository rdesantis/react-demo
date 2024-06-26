
const TestimonialCard = (props) => {
    const stars = (rating) => {
        return (
            <div className='stars'>
                { [...Array(rating).keys()].map(key => <img key={key} src='Little star.png' alt='star' />) }
            </div>
        );
    }

    const card = props.card;
    return (
        <div className='testimonial-card'>
            { stars(card.rating) }
            <div className='testimonial-image'>
                <img src={card.image} alt={card.name} />
            </div>
            <h6 className='testimonial-name'>{card.name}</h6>
            <p className='testimonial-review'>{card.review}</p>
        </div>
    );
}

export default TestimonialCard;
