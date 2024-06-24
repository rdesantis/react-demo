const HighlightCard = (props) => {
    const card = props.card;
    return (
        <div className='highlight-card'>
            <img className='highlight-image' src={card.image} alt={card.name} />
            <div className='highlight-text'>
                <h2 className='highlight-name'>{card.name}</h2>
                <p className='highlight-price'>{card.price}</p>
                <p className='highlight-description'>{card.description}</p>
                <h6 className='highlight-order'>
                    Order a delivery
                    <img src='bike.png' alt='bike' />
                </h6>
            </div>
        </div>
    );
}

export default HighlightCard;
