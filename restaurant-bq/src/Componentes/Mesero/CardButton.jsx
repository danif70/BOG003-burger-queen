import React from 'react';
import { Mesero } from './Mesero';
import { Cards } from './Cards';


const CardButton = (setProduct, {dataState} ) => {

  return(
    <button   
        onClick={() => setProduct(dataState.name) }
        className='btn-cards btn-warning w-50 ' type='submit'>
          AGREGAR
        </button>
  )

}

export {CardButton}