import React from 'react'
import {
    BrowserRouter as Router,
    Routes, 
    Route, 
} from 'react-router-dom'
import PagesPromotionSearch from './Promotion/Search/Search'
import PagesPromotionForm from './Promotion/Form/Form'

const Root = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/create" element={<PagesPromotionForm/>} />
          <Route exact path="/edit/:id" element={<PagesPromotionForm/>} />
          <Route exact path="/" element={<PagesPromotionSearch/>} />
        </Routes>
      </Router>
    );
}

export default Root;