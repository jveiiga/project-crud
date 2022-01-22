import React, { useEffect, useState } from 'react'
import{ useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Form.css'

const initialValue = {
    title: '',
    price: 0,
}

const PromotionForm = ({ id }) => {
    const [values, setValues] = useState(id ? null : initialValue);
    const history = useNavigate();

    useEffect(() => {
      if(id) {
        axios.get(`http://localhost:5000/promotions/${id}`)
          .then((response) => {
            setValues(response.data);
          })
      }
    }, [])

    function onChange(ev) {
        const { name, value } = ev.target;


        console.log({ name, value })

        setValues({...values, [name]: value});
    }

    function onSubmit(ev) {
        ev.preventDefault();

        const method = id ? 'put' : 'post';
        const url = id
          ? `http://localhost:5000/promotions/${id}`
          : 'http://localhost:5000/promotions'

        axios[method](url, values)
            .then((response) => {
                history('/');
            })
    }

    if(!values) {
      return <div>Carregando...</div>
    }

    return (
      <div>
        <h1>Despesas</h1>
        <h2>Nova Promoção</h2>
        <form onSubmit={onSubmit}>
          <div className="promotion-form__group">
            <label htmlFor="title" className="">
              Título
            </label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={onChange}
              value={values.title}
            />
          </div>
          <div className="promotion-form__group">
            <label htmlFor="price" className="">
              Preço
            </label>
            <input
              id="price"
              name="price"
              type="number"
              onChange={onChange}
              value={values.price}
            />
          </div>
          <div>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    );
}

export default PromotionForm; 