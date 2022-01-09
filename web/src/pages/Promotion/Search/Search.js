import React, { useEffect, useState } from 'react'
import PromotionCard from 'components/Promotion/Card/Card';
import axios from 'axios'

import '../../../components/Promotion/Card/Card.css'


const PagesPromotionSearch = () => {
  const [promotions, setPromotions] = useState([])

  useEffect(() => { 
    axios.get('http://localhost:5000/promotions')
      .then((response) => {
        setPromotions(response.data);
      });
  }, []);


  return (
    <>
      <h1>Despesas</h1>
      {promotions.map((promotion) => (
        <PromotionCard promotion={promotion} />
      ))}
    </>
  );
}

export default PagesPromotionSearch;