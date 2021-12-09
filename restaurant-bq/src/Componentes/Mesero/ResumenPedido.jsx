import React, { Fragment, useState,useEffect } from "react";
import "../Styles/ResumenPedido.css";
import Add from "../Imagenes/add.png";
import Minus from "../Imagenes/minus.png";
import Delete from "../Imagenes/delete.png";
import { db } from "../../Firebase/firebase.js";
import { collection, addDoc } from "firebase/firestore";

const ResumenPedido = ({ order, setOrder, onAdd, onRemove, onRemoveAll}) => {
  const totalPrice = order.reduce(
    (price, items) => price + items.qty * items.price,
    0
  );

  
  const [estado,setEstado] = useState ("EN COCINA");
  const [count, setCount] = useState(1);
  const [client, setClient] = useState("");  

  const currentDate= new Date()
  const currentTime = currentDate.getHours()+ ':'+currentDate.getMinutes()+':'+currentDate.getSeconds()

 


  const objOrder = async () => {
    await addDoc(
      collection(db, "orders"),
      {
        client: client,
        numOrder: count,
        item: order,
        totalPrice: totalPrice, 
        dateInitial: currentTime, 
        state: estado, 
               
      },
      
    );

  };

  return (
    <Fragment>
      <div className="header-pedido">
        <div className="section-cliente">          
          <label htmlFor="cliente"> Cliente: </label>
          <input
            className="input-cliente"
            value={client.trim()}
            type="text"
            required="required"
            id="cliente"
            onChange={(e) => {
              setClient(e.target.value);
            }}
          />
        </div>
        <div className="contador-pedido">
          <p> # Pedido </p>
          <p className="contador">{count}</p>
        </div>
      </div>

      <div className="body-pedido">
        <div className="title-body-pedido">
          <p>ITEM</p>
          <p>CANT</p>
          <p>P.UNIT</p>
          <p>P.TOTAL</p>
        </div>
        <div>
          {/* {order.length === 0 && <div className="no-order">ORDEN VACÍA</div>} */}
          {/* renderizado condicional && = entonces */}
        </div>

        {order.map((item) => (
          <div key={item.name}>
            <div className="items-body-pedido">
              <img
                type="button"
                className="btn-OnRA"
                src={Minus}
                onClick={() => onRemove(item)}
              ></img>
              <p className="item-data"> {item.qty} </p>
              <img
                type="button"
                className="btn-OnRA"
                src={Add}
                onClick={() => onAdd(item)}
              ></img>
              <p className="item-data"> $ {item.price} </p>
              {/* <button className="btn-OnRA" onClick={() => onRemoveAll(item)}>X</button> */}
              <img
                type="button"
                className="btn-OnRA"
                src={Delete}
                onClick={() => onRemoveAll(item)}
              ></img>
              <p className="item-data"> $ {item.price * item.qty} </p>
            </div>
          </div>
        ))}
        <div className="total-price">TOTAL $ {totalPrice}</div>
        <div className="enviar">
          {order.length !== 0 && client.length !== 0 ? (
            <button
              type="submit"
              className="btn-cards btn-warning w-50"
              onClick={() => {
                objOrder();
                setCount(count + 1);
                setOrder([]);
                setClient("");                                 
              }}
            >
              ENVIAR PEDIDO
            </button>
          ) : (
            <div className="no-order">ORDEN VACIA O SIN NOMBRE</div>
            
          )}
        </div>
      </div>
    </Fragment>
  );
};
export { ResumenPedido };
