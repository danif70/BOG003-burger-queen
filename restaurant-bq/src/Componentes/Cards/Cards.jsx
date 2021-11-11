import React, { useEffect, useState } from "react";
import "./Cards.css";

//import capuccino from '../Imagenes/capuccino.png'

const Cards = ({dataProduct}) => {
  return (
   
        <div className="card text-center col-sm-8 card bg-light mb-3 w-100">
          <div className="card-header">{dataProduct.type}</div>
          <div className="card-body">
            <h5 className="card-title">{dataProduct.name}</h5>
            <p className="card-text">{dataProduct.price}</p>
            <img src={dataProduct.img}></img>
            <button className="btn btn-warning w-50 " type="submit">
              AGREGAR
            </button>
          </div>
        </div>
   
  );
};

export { Cards };
