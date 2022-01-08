import React from 'react'
import PromotionCard from 'components/Promotion/Card/Card';

import '../../../components/Promotion/Card/Card.css'

const promotion = { 
    "id":1, 
    "title":"conta numero um",
    "price":9.99,

}

const PagesPromotionSearch = () => {
  return (
    <>
      <h1>Despesas</h1>
      <PromotionCard promotion={promotion} />
    </>
  );
}

export default PagesPromotionSearch;