// Card.js
interface CardProps {
    image: string;
    title: string;
    description: string;
}


const Card = ({ image, title, description }: CardProps) => {
    return (
        <div className="card flex flex-col justify-center items-center">
            <div className="card-image-container flex justify-center m-2">
                <img src={image} alt={title} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="font-bold text-lg m-2">{title}</h3>
                <p className="m-2">{description}</p>
            </div>
        </div>
    );
}

export default Card;

