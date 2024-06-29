// Card.js
interface CardProps {
    image: string;
    title: string;
    description: string;
}


const Card = ({ image, title, description }: CardProps) => {
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={image} alt={title} className="card-image" />
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;

