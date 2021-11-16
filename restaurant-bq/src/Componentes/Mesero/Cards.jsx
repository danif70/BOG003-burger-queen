import React, { Component } from 'react';
import '../Styles/Cards.css';

const Cards = ({ dataProduct , setOrder, order} ) => {

 /* const clientProduct = () => {
    setProduct = [dataProduct.name, dataProduct.price]
    console.log('desde Cards',setProduct)
  }    */ 
  //console.log('desde Cards',setProduct)
  return (
    <div
      className='card-container text-center col-sm-2 card bg-light mb-3'
      key={dataProduct.id}> 
      <div className='card-header'>{dataProduct.name}</div>
      <div className='card-body'>
        <p className='card-text'>{dataProduct.price}</p>
      <img className='img-cards' src={dataProduct.image}></img> 
      <button 
        onClick={() =>   
        setOrder([...order, dataProduct])}
        className='btn-cards btn-warning w-50 ' type='submit'>
          AGREGAR
        </button>
        
      </div>
    </div>
  );
};

export { Cards };
