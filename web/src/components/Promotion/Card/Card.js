import React from 'react'
import './Card.css'

const PromotionCard = ({ promotion }) => {
    return (
    <div>
        <div className="promotion-card">
            <h3 className="promotion-card__title">{promotion.title}</h3>
            <span className="promotion-card__price">R$ {promotion.price}</span>
        </div>
    </div>
    );

}

export default PromotionCard;