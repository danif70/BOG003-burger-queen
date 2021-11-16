import React from 'react';
import '../Styles/Cards.css';

const Cards = ({ dataProduct }) => {
  // Se crea template para cada tarjeta
  return (
    <div
      className='card-container text-center col-sm-2 card bg-light mb-3'
      key={dataProduct.id}> 
      <div className='card-header'>{dataProduct.name}</div>
      <div className='card-body'>
        {/* <h5 className='card-title'>{dataProduct.name}</h5> */}
        <p className='card-text'>{dataProduct.price}</p>
      <img className='img-cards' src={dataProduct.image}></img> 
        <button className='btn-cards btn-warning w-50 ' type='submit' >
          AGREGAR
        </button>
      </div>
    </div>
  );
};

export { Cards };
