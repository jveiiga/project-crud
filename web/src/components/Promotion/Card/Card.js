import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'

const PromotionCard = ({ promotion }) => {
    return (
      <div>
        <div className="promotion-card">
          <h3 className="promotion-card__title">{promotion.title}</h3>
          <span className="promotion-card__price">R$ {promotion.price}</span>
          <Link to={`/edit/${promotion.id}`}>Editar</Link>
        </div>
      </div>
    );

}

export default PromotionCard;