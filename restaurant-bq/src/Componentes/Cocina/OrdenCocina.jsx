import React, { Fragment, useEffect, useState } from "react";
import watch from "../Imagenes/reloj.png";
import "../Styles/OrdenCocina.css";
import {Historial} from "./Historial";
import { db } from "../../Firebase/firebase.js";
import {collection, updateDoc, doc } from "firebase/firestore";

const OrdenCocina = ({ oneOrder}) => {
  
  const [estado2,setEstado2] = useState(oneOrder.state);
  console.log(oneOrder);

  const actualizar = async () =>{
    console.log(estado2);
        await updateDoc(doc(db, 'orders', oneOrder.id), {state: estado2})
      
  }
    
    
  return (
    <Fragment>
      
      <div
        className="cards-cooker text-center col-sm-2 card bg-light mb-3
      overflow-auto"
      >
        <div className="card-header header-cooker">
        
          <p>{oneOrder.client}</p>
          <p>{oneOrder.numOrder}</p>
          <img
            className="watch-cooker"
            src={watch}
            alt="watch"
          />
          <p>{oneOrder.dateInitial}</p>
          
        </div>
         <div className="item-qty">
          <ul className="list-order">
            ITEM
            {oneOrder.item.map((item) => (
              <li className="li-items" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
          <ul className="list-order">
            CANTIDAD
            {oneOrder.item.map((qty) => (
              <li className="li-qty" key={qty.id}>
                {qty.qty}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-cards-cooker">
          <button onClick={()=>{setEstado2("orden Lista")
          }}       
          className="btn-card-cooker btn-warning" 
          type="submit">
           { estado2 } 
          </button>  
          <button onClick={()=>actualizar()}       
          className="btn-card-cooker btn-warning" 
          type="submit">
          ACTUALIZAR 
          </button> 

        </div>
      </div>
      {/* <Historial  
      oneOrder={oneOrder}
      estado = {estado2}
      setEstado = {setEstado2}
      /> */}
    </Fragment>
  );
};

export { OrdenCocina };
