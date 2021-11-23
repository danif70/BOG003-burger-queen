import React, { Fragment, useState } from "react";
import "../Styles/ResumenPedido.css";

const ResumenPedido = ({ order, setOrder, onAdd, onRemove, onRemoveAll }) => {
  const totalPrice = order.reduce(
    (price, items) => price + items.qty * items.price,
    0
  );

  const [count, setCount] = useState(1);
  const [client, setClient] = useState('');

  const orderMap = order.map((item)=> item.qty)
  const orderPriceMap = order.map((item)=> parseInt(item.price))

  const objOrder = {
    client: client,
    numOrder: count,
    item: order,
    qty: orderMap,
    itemPrice: orderPriceMap,
    totalPrice: totalPrice
  }
  
  return (
    <Fragment>
      <div className="header-pedido">
        <div className = "section-cliente"> 
        <label htmlFor = "cliente"> Cliente:  </label>
        <input className = "input-cliente" value={client} type="text" id = "cliente" onChange={(e) => {setClient(e.target.value)}}/>
        </div>
        <div className = "contador-pedido">
        <p> # Pedido </p>
        <p className = "contador">{count}</p>
        </div>
        
        
      </div>     
      
                    
      <div className="body-pedido">
        <div className= "title-body-pedido">
          <p>ITEM</p>
          <p>CANT</p>
          <p>P.UNIT</p>
          <p>P.TOTAL</p>
          
        </div>
        <div>{order.length === 0 && <div>ORDEN VACÍA</div>} 
        {/* renderizado condicional && = entonces */}</div>

        {order.map((item) => (
          <div key={item.name}>
            <div className= "items-body-pedido">
            <p className = "item-body-name" >{item.name}</p>
            <button className = "btn-OnRA" onClick={() => onRemove(item)}>-</button>
            <p> {item.qty} </p>
            <button className = "btn-OnRA" onClick={() => onAdd(item)}>+</button>  
            <p> $ {item.price} </p>  
            <p>  $ {item.price* item.qty} </p>        
            <button onClick={() => onRemoveAll(item)}>Etodo</button> 
            </div>
            
                       
             
           
          </div>
        ))}
        <div>
          TOTAL $ {totalPrice}
        </div>
        <div>
        <button type="submit" 
        className="btn-cards btn-warning w-50 "
        onClick={() =>{ 
          setCount(count+1)
          setOrder([])
          setClient('')
          console.log(objOrder)
        }}
        >
          ENVIAR PEDIDO</button>
        </div>
      </div>
      
    </Fragment>
  );
};
export { ResumenPedido };
