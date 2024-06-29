// Card.js
import React from 'react';
import '../index.css'; 

const Card = ({ image, title, description }) => {
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

