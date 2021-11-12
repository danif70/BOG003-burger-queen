import React from 'react';
import './Cards.css';

const Cards = ({ dataProduct }) => {
  // Se crea template para cada tarjeta
  return (
    <div
      className='card text-center col-sm-8 card bg-light mb-3 w-100'
      key={dataProduct.id}> 
      <div className='card-header'>{dataProduct.type}</div>
      <div className='card-body'>
        <h5 className='card-title'>{dataProduct.name}</h5>
        <p className='card-text'>{dataProduct.price}</p>
        {/* <img src={dataProduct.image}></img> */}
        <button className='btn btn-warning w-50 ' type='submit'>
          AGREGAR
        </button>
      </div>
    </div>
  );
};

export { Cards };
