import React, { Fragment, useState } from "react";
import "../Styles/ResumenPedido.css";
import Add from '../Imagenes/add.png'
import Minus from '../Imagenes/minus.png'
import Delete from '../Imagenes/delete.png'
import {db} from '../../firebase.js'
import { collection, addDoc } from "firebase/firestore";

const ResumenPedido = ({ order, setOrder, onAdd, onRemove, onRemoveAll }) => {
  const totalPrice = order.reduce(
    (price, items) => price + items.qty * items.price,
    0
  );

  const [count, setCount] = useState(1);
  const [client, setClient] = useState("");

  const orderMap = order.map((item) => item.qty);
  const orderPriceMap = order.map((item) => parseInt(item.price));

  const objOrder = {
    client: client,
    numOrder: count,
    item: order,
    qty: orderMap,
    itemPrice: orderPriceMap,
    totalPrice: totalPrice,
  };

 /* const addOrder = async () => {
    await db.collection('order').add().set(objOrder);
    //console.log(objOrder);
  }*/
 

  return (
    <Fragment>
      <div className="header-pedido">
        <div className="section-cliente">
          <label htmlFor="cliente"> Cliente: </label>
          <input
            className="input-cliente"
            value={client}
            type="text" required="required"
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
          {order.length === 0 && <div className="no-order">ORDEN VACÍA</div>}
          {/* renderizado condicional && = entonces */}
        </div>

        {order.map((item) => (
          <div key={item.name}>
            <div className="items-body-pedido" >
              <p className="item-body-name">{item.name}</p>
              <img type="button" className="btn-OnRA" src={Minus} onClick={() => onRemove(item)}></img> 
              <p className="item-data"> {item.qty} </p>
              <img type="button" className="btn-OnRA" src={Add} onClick={() => onAdd(item)}></img> 
              <p className="item-data"> $ {item.price} </p>
              {/* <button className="btn-OnRA" onClick={() => onRemoveAll(item)}>X</button> */}
              <img type="button" className="btn-OnRA" src={Delete} onClick={() => onRemoveAll(item)}></img> 
              <p className="item-data"> $ {item.price * item.qty} </p>
            </div>
          </div>
        ))}
        <div className="total-price">TOTAL $ {totalPrice}</div>
        <div className="enviar">
          <button
            type="submit"
            className="btn-cards btn-warning w-50"
            onClick={() => {
              //addOrder()
              setCount(count + 1);
              setOrder([]);
              setClient("");
              console.log(objOrder);
            }}
          >
            {order.length != 0 && <div>ENVIAR PEDIDO</div>}
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export { ResumenPedido };
